---
layout: post
title:  Sound Gloves
description: A Key Instrument in Tromleorkestret’s Sonic Arsenal
image:  '/images/tromleorkestret/GloveLight.jpg'
tags:   [Tromleorkestret, DIY, Music, SoundDesign, Work]
featured: true
---

The **Sound Gloves** are an instrument designed exclusively for Tromleorkestret, blending cutting-edge technology with expressive performance. Developed as a wearable controller for real-time sound manipulation, the Sound Gloves empower the performer, to sculpt dynamic sonic landscapes with precision and creativity.



> I’ve never seen anything like it. Every gesture seemed to unlock a new layer of sound—absolutely magical!
>
> <cite>John Doe</cite>


![SofieGloves]({{site.baseurl}}/images/tromleorkestret/GlovesSofie.png)
*Sofie Playing the Sound Gloves*


### **Key Features and Design**

1. **Integrated Sensors**
    - **Push Buttons**: Each finger is equipped with a pushbutton, enabling the performer to trigger specific sound events or effects intuitively.
    - **IMU Sensor**: The gloves utilize the [Adafruit BNO055 IMU](https://www.adafruit.com/product/4646), mounted on the back of the hand. This tracks orientation and acceleration in three dimensions, interpreting movements like tilts, rotations, and shakes to control sound parameters dynamically.
    - **Microcontroller**: The gloves are 

2. **Microcontroller Unit (MCU)**
    - **Component**: The [Adafruit ESP32-S3 FEATHER 4MB/2MB PSRAM](https://www.adafruit.com/product/5477) microcontroller serves as the brain of the Sound Gloves, processing inputs from the keys, pressure sensor, and IMU.
    - **Communication Protocol**: Data is transmitted using [Open Sound Control (OSC)](https://www.cnmat.berkeley.edu/opensoundcontrol/), ensuring high-speed, low-latency communication with external audio systems.

### **Real-Time Sound Control**

1. **Effect Chains on [Bela](https://bela.io/products/bela-and-bela-mini/)**
    - The Sound Gloves interact with embedded DSP systems, including [Bela](https://bela.io/products/bela-and-bela-mini/) platforms. The performer uses the gloves to control intricate effect chains featuring saturation, delay, reverb, distortion, and more. The gloves also provide real-time interaction with a **Parameter Space**, enabling fluid transitions between presets based on hand gestures.

2. **[Max4Live](https://www.ableton.com/en/live/max-for-live/) Integration**
    - In addition to Bela systems, the Sound Gloves control a special [Max4Live](https://www.ableton.com/en/live/max-for-live/) device tailored specifically for the gloves. This device includes a specialized effect chain designed to leverage the gloves’ expressive capabilities, offering endless possibilities for real-time sound manipulation during performances.

### **Dynamic Parameter Space**

As with many of my other instruments, the Sound Gloves integrate seamlessly with the **Parameter Space**, allowing for expressive and intuitive sound design:

- **Gesture-Based Mapping**: The IMU sensor tracks hand orientation and acceleration, providing multidimensional control over parameters.
- **Preset Creation**:  Map specific parameter settings to hand positions, creating a landscape of presets stored in the Parameter Space.
- **Fluid Transitions**: When the Parameter Space is active, gestures interpolate between presets, enabling smooth, evolving soundscapes that bring a captivating dynamic to performances.


<p><iframe src="https://www.youtube.com/embed/yolz8VWj9BM?si=Y4-xCmx1mrCFw8Nf" frameborder="0" allowfullscreen></iframe></p>

