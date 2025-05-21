# Anime Finder

A web application that helps you identify anime from screenshots or images. Simply upload an image, and the application will find the matching anime scene, providing you with episode information and a video preview. [link](https://lykos-manolis.github.io/Anime-Finder/)

![Usage example](assets/docs/4.gif)

## Features

- **Image Upload**: Upload any screenshot or image from an anime
- **Instant Results**: Get immediate matches with confidence scores
- **Video Previews**: Watch the matching scene directly in the browser
- **Episode Information**: Get detailed information about the episode where the scene appears
- **AniList Integration**: Direct links to AniList for more anime information
- **User-Friendly Interface**: Clean and intuitive design with loading indicators and error handling

## How It Works

1. Upload an image through the web interface
2. The application sends the image to the trace.moe API
3. The API analyzes the image and finds matching anime scenes
4. Results are displayed with:
   - Anime title
   - Episode number
   - Confidence score
   - Video preview of the matching scene
   - Link to AniList for more information

## Technical Details

- Built with vanilla JavaScript
- Uses the [trace.moe](https://trace.moe/) API for anime scene detection
- Integrates with AniList for additional anime information
- Responsive design using Bootstrap
- Modern UI with loading spinners and error handling

## Usage

1. Open the application in your web browser
2. Click the file input or drag and drop an image
3. Wait for the results to load
4. Click on any result to expand and view more details
5. Watch the video preview or visit AniList for more information

## Supported Image Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)

## Dependencies

- Bootstrap 5
- jQuery
- Perfect Scrollbar
- Boxicons

## Browser Support

The application works on all modern browsers that support:

- File API
- Fetch API
- Video playback
- Modern CSS features
