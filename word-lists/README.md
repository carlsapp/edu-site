# Word Lists

These words are used to generate the word flashcards helpful for teaching kids how to read.

## Creating MP3 Files

The MP3 files for the words were created using the AWS Polly service and the following AWS CLI
command:

    aws aws polly start-speech-synthesis-task --output-format mp3 --output-s3-bucket-name my-s3-bucket --text "Some text" --voice-id Joanna
