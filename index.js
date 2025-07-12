import express from 'express';
const app = express();
app.use(express.json());

app.post('/vapi', (req, res) => {
  const transcript = req.body.transcript?.toLowerCase() || "";

  if (transcript.includes("appointment")) {
    return res.json({
      type: "say",
      text: "<speak>Let me check real quick... <break time='500ms'/> Okay, I have 10:15 or 3:30 available. Would you like me to reserve one for you?</speak>",
      bargeIn: true
    });
  }

  return res.json({
    type: "say",
    text: "<speak>Hi there, thanks for calling. How can I help you today?</speak>",
    bargeIn: true
  });
});

app.get('/', (req, res) => res.send('Vapi webhook live'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Webhook live on port ${port}`));
