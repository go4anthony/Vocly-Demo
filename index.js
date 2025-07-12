import express from 'express';
const app = express();
app.use(express.json());

app.post('/vapi', (req, res) => {
  const transcript = req.body.transcript?.toLowerCase() || "";

  if (transcript.includes("appointment")) {
    return res.json([
      {
        type: "say",
        text: `<speak>
          Let me just check real quick...
          <break time="500ms"/>
        </speak>`,
        bargeIn: true
      },
      {
        type: "say",
        text: `<speak>
          Okay — we’ve got walk-in availability all day. 
          <break time="400ms"/>
          But if you’d like, I can pre-register you for around ten fifteen... or maybe three thirty.
          <break time="400ms"/>
          What works better for you?
        </speak>`,
        bargeIn: true
      }
    ]);
  }  

  return res.json({
  type: "say",
  text: `<speak>
    Hmm... not totally sure what you meant just now. 
    <break time="400ms"/>
    But I can definitely help — could you say that one more time?
  </speak>`,
  bargeIn: true
});

  return res.json({
  type: "say",
  text: `<speak>
    Hmm... not totally sure what you meant just now. 
    <break time="400ms"/>
    But I can definitely help — could you say that one more time?
  </speak>`,
  bargeIn: true
});

  return res.json({
  type: "say",
  text: `<speak>
    Hmm... not totally sure what you meant just now. 
    <break time="400ms"/>
    But I can definitely help — could you say that one more time?
  </speak>`,
  bargeIn: true
});

  return res.json({
  type: "say",
  text: `<speak>
    Hmm... not totally sure what you meant just now. 
    <break time="400ms"/>
    But I can definitely help — could you say that one more time?
  </speak>`,
  bargeIn: true
});

  return res.json({
  type: "say",
  text: `<speak>
    Hmm... not totally sure what you meant just now. 
    <break time="400ms"/>
    But I can definitely help — could you say that one more time?
  </speak>`,
  bargeIn: true
});

});

app.get('/', (req, res) => res.send('Vapi webhook live'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Webhook live on port ${port}`));
