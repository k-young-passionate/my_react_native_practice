/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// You can import from local files
import ImageView from 'react-native-image-view';

const images = [
  {
		id: '1',
    url: 'https://farm1.static.flickr.com/256/31719945500_f4c3cac93c_b.jpg',
    title: 'Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.',
  },
	{
		id:'2',
		url:'http://img.hani.co.kr/imgdb/resize/2019/0121/00501111_20190121.JPG',
		title: 'gang a jui',

	},
	{
		id:'3',
		url:'http://img.hani.co.kr/imgdb/resize/2019/0121/00501111_20190121.JPG',
		title: 'gang a jui',

	},
	{
		id:'4',
		url:'http://img.hani.co.kr/imgdb/resize/2019/0121/00501111_20190121.JPG',
		title: 'gang a jui',

	},
	{
		id:'5',
		url:'http://img.hani.co.kr/imgdb/resize/2019/0121/00501111_20190121.JPG',
		title: 'gang a jui',

	},
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: {
        url: '',
        width: 0,
        height: 0,
      },
      isImageViewVisible: false,
    };
  }

  render() {
    const { isImageViewVisible, currentImage } = this.state;

    return (
      <View style={styles.container}>
       <View>

				<ScrollView style={styles.scrollView}>
          {images.map(image => (

              <Image
								key={ image.id }
                style={{ width: 200, height: 200 }}
                source={{ uri: image.url }}
                resizeMode="center"
              />
         ))}
				</ScrollView>
        </View>
        <ImageView
          source={{ uri: currentImage.url }}
          imageWidth={currentImage.width}
          imageHeight={currentImage.height}
          title={currentImage.title}
          isVisible={isImageViewVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Component.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});



/*
           </TouchableOpacity>
 */

/*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
