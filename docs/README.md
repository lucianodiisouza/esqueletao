# Esqueletao Documentation

This folder contains the documentation website for Esqueletao.

## GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "Deploy from a branch"
3. **Select branch**: `main` or `master`
4. **Select folder**: `/docs`
5. **Save** the settings

Your documentation will be available at: `https://lucianodiisouza.github.io/esqueletao/`

## Local Development

To view the documentation locally:

1. Open `docs/index.html` in your browser
2. Or serve it with a local server:
   ```bash
   cd docs
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Features

- ✅ **Responsive design** - works on mobile and desktop
- ✅ **Syntax highlighting** - code examples with proper styling
- ✅ **Live demo** - animated skeleton examples
- ✅ **Modern design** - clean, professional look
- ✅ **Fast loading** - no external dependencies

## Customization

The documentation is a single HTML file with embedded CSS. You can easily customize:

- Colors and styling in the `<style>` section
- Content in the `<body>` section
- Add more sections as needed

## Deployment

GitHub Pages will automatically deploy when you push changes to the `docs/` folder.
