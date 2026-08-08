FAVICON SETUP

1. Upload favicon.ico to the ROOT of your GitHub repository:
   exidecareindore/favicon.ico

2. Upload favicon.png to:
   assets/images/favicon.png

3. In the <head> section of index.html, about.html, products.html and contact.html,
   add:

<link rel="icon" type="image/png" href="assets/images/favicon.png">
<link rel="shortcut icon" href="favicon.ico">

4. Commit the changes and wait for GitHub Pages to deploy.

5. Browser cache:
   Open the website and press Ctrl + F5.

For pages inside the root folder (about.html/products.html/contact.html),
the same relative path assets/images/favicon.png is correct.
