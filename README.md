

# Image Gallery Pagination

This project is a simple React application that displays a gallery of images with a header and pagination.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/image-gallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-gallery
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Components

- **App**: Main component that renders `Navbar` and `ImageGallery`.
- **Carousel**: Displays a set of images in a sliding carousel.
- **ImageGallery**: Displays a grid of images with a "Load More" button for pagination.
- **Pagination**: Button to load more images.

## API

The application fetches images from the [Picsum Photos API](https://picsum.photos/v2/list?page=2&limit=100).
