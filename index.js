import express from 'express';
const app = express();
app.use(express.json());

app.post('/vapi', (req, res) => {
  const transcript = req.body.transcript?.toLowerCase() || "";

  // Scheduling intent
  if (transcript.includes("appointment") || transcript.includes("schedule") || transcript.includes("pre-register")) {
    return res.json([
      { type: "say", text: "<speak>Let me check real quick...</speak>", bargeIn: true },
      { type: "say", text: "<speak>Okay — we’ve got walk-in availability all day.</speak>", bargeIn: true },
      { type: "say", text: "<speak>If you’d like, I can pre-register you for ten fifteen... or three thirty.</speak>", bargeIn: true },
      { type: "say", text: "<speak>What works better for you?</speak>", bargeIn: true }
    ]);
  }
  
  if (transcript.includes("website") || transcript.includes("site")) {
    return res.json({
      type: "say",
      text: `<speak>
        Sure — our website is
        <break time="300ms"/>
        www dot A F C urgent care dot com.
        <break time="300ms"/>
        Let me know if you'd like me to text that to you.
      </speak>`,
      bargeIn: true
    });
  }  

  // Hours intent
  if (transcript.includes("hours") || transcript.includes("open") || transcript.includes("close")) {
    return res.json([
      { type: "say", text: "<speak>We’re open Monday through Friday from 8 AM to 8 PM.</speak>", bargeIn: true },
      { type: "say", text: "<speak>On weekends, we’re open 9 to 5.</speak>", bargeIn: true }
    ]);
  }

  // Location intent
  if (transcript.includes("where") || transcript.includes("located") || transcript.includes("address")) {
    return res.json([
      { type: "say", text: "<speak>We’re at 2480 Gulf to Bay Boulevard in Clearwater.</speak>", bargeIn: true },
      { type: "say", text: "<speak>That’s in the plaza next to Walgreens and across from Chili’s.</speak>", bargeIn: true }
    ]);
  }

  // Insurance intent
  if (transcript.includes("insurance") || transcript.includes("accept") || transcript.includes("united")) {
    return res.json([
      { type: "say", text: "<speak>We accept most major insurance plans — like Aetna, Cigna, and United.</speak>", bargeIn: true },
      { type: "say", text: "<speak>Let us verify your plan when you arrive.</speak>", bargeIn: true }
    ]);
  }

  // COVID or flu test intent
  if (transcript.includes("covid") || transcript.includes("flu test") || transcript.includes("test")) {
    return res.json([
      { type: "say", text: "<speak>No problem — let me check...</speak>", bargeIn: true },
      { type: "say", text: "<speak>We can do 10:00 or 2:30 today. Or feel free to walk in any time.</speak>", bargeIn: true }
    ]);
  }

  // Speak to someone intent
  if (transcript.includes("speak to") || transcript.includes("clinic manager") || transcript.includes("representative")) {
    return res.json([
      { type: "say", text: "<speak>I can transfer you to Dana Cruz, our clinic manager. Please hold one moment.</speak>", bargeIn: true }
    ]);
  }

  // Fallback (default response)
  return res.json([
    { type: "say", text: "<speak>Hmm... not totally sure what you meant just now.</speak>", bargeIn: true },
    { type: "say", text: "<speak>But I can definitely help — could you say that one more time?</speak>", bargeIn: true }
  ]);
});

app.get('/', (req, res) => res.send('Vapi webhook live'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Webhook live on port ${port}`));
