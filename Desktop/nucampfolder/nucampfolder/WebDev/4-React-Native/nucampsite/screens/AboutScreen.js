import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseURL';
import * as Animatable from 'react-native-animatable';

const Mission = () => (
  <Card>
    <Card.Title>Our Mission</Card.Title>
    <Card.Divider />
    <Text style={{ margin: 10 }}>
      We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness.
      We increase access to adventure for the public while promoting safe and respectful use of resources.
      The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards.
      We also present a platform for campers to share reviews on campsites they have visited with each other.
    </Text>
  </Card>
);

const AboutScreen = () => {
  const partners = useSelector((state) => state.partners);

  if (partners.isLoading) {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Mission />
          <Card>
            <Card.Title>Community Partners</Card.Title>
            <Card.Divider />
            <Loading />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  if (partners.errMess) {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Mission />
          <Card>
            <Card.Title>Community Partners</Card.Title>
            <Card.Divider />
            <Text>{partners.errMess}</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Mission />
        <Card>
          <Card.Title>Community Partners</Card.Title>
          <Card.Divider />
          {partners.partnersArray.map((partner) => (
            <ListItem key={partner.id} bottomDivider>
              <Avatar rounded source={{ uri: baseUrl + partner.image }} />
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default AboutScreen;