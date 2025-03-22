const express = require('express')
const mongoose = require('mongoose');
const Url = require('./models/short_urls.model.js');

const app = express()
app.use(express.json());


app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
  
    try {
      const newUrl = new Url({ url });
      await newUrl.save();
      res.status(201).json({
        id: newUrl._id,
        url: newUrl.url,
        shortCode: newUrl.shortCode,
        createdAt: newUrl.createdAt, 
        updatedAt: newUrl.updatedAt,
      });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/shorten/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
  
    try {
      const url = await Url.findOne({ shortCode });
      if (!url) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
  
      url.accessCount += 1;
      await url.save();
  
      res.status(200).json({
        id: url._id,
        url: url.url,
        shortCode: url.shortCode,
        createdAt: url.createdAt,
        updatedAt: url.updatedAt,
      });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });


  app.put('/shorten/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
    const { url } = req.body;
  
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
  
    try {
      const existingUrl = await Url.findOne({ shortCode });
      if (!existingUrl) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
  
      existingUrl.url = url;
      existingUrl.updatedAt = Date.now();
      await existingUrl.save();
  
      res.status(200).json({
        id: existingUrl._id,
        url: existingUrl.url,
        shortCode: existingUrl.shortCode,
        createdAt: existingUrl.createdAt,
        updatedAt: existingUrl.updatedAt,
      });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.delete('/shorten/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
  
    try {
      const url = await Url.findOneAndDelete({ shortCode });
      if (!url) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
  
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  
  app.get('/urls', async (req, res) => {
    try {
      // Fetch all URLs from the database
      const urls = await Url.find({});
  
      // Return the list of URLs
      res.status(200).json(urls);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

mongoose.connect("mongodb+srv://afifamasood333:ozUXQyVviYEf4psy@backenddb.31o11.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to Database");
    app.listen(3000,()=>{

        console.log("Server is running on port 3000");
    });
})
.catch(()=> {
     console.log("Conection Failed");
})