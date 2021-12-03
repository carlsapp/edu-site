#!/bin/bash

for word in $(cat "$1");
do
    aws polly synthesize-speech --engine standard --output-format mp3 --voice-id Joanna --text $word ../audio-files/$word.mp3;
done
