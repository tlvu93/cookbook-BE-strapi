# Strapi Backend for Cookbook Project

## List of progress

- deploy Strapi locally
- use Strapi to build Content-Types
- deploy Strapi on [Heroku with DB](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html)

- populate data on the Heroku DB

  - downloaded a JSON with [Food data](https://fdc.nal.usda.gov/)
  - wrote a script that :
    - extract and maps relevant data (name, kcal, carb, fat, protein)
    - send for every entry a POST request to the backend to populate the DB

- Heroku clears the dyno's every 24/h -> saved images will be lost
  - Save Images with Cloudinary: https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application
