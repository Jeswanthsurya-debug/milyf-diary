export type LanguageKey =
  | "en"
  | "hi"
  | "bn"
  | "te"
  | "ta"
  | "mr"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or";

export type SahayaCopy = {
  languageName: string;
  chooseLanguage: string;
  chooseLanguageHint: string;
  brandTagline: string;
  calmHeadline: string;
  helpTitle: string;
  helpBody: string;
  assistantNote: string;
  trustedMenu: string;
  languageMenu: string;
  silentMode: string;
  silentOn: string;
  silentOff: string;
  trustedTitle: string;
  trustedIntro: string;
  trustedSetupHint: string;
  trustedMinimum: string;
  trustedMaximum: string;
  contactName: string;
  contactNamePlaceholder: string;
  phoneNumber: string;
  phonePlaceholder: string;
  phoneError: string;
  nameError: string;
  consent: string;
  addPerson: string;
  savePeople: string;
  savedPeople: string;
  close: string;
  delete: string;
  edit: string;
  testMessage: string;
  testMessageBody: string;
  saveAtLeast: string;
  emergencyLabel: string;
  emergencySubtitle: string;
  emergencySetupHint: string;
  locationWorking: string;
  locationDenied: string;
  locationUnavailable: string;
  emergencyOpened: string;
  sendSheetTitle: string;
  sendSheetBody: string;
  sendTo: (name: string) => string;
  whatsapp: string;
  tapSend: string;
  closeSheet: string;
  noLocation: string;
  police: string;
  policeSubtitle: string;
  hospital: string;
  hospitalSubtitle: string;
  mapWorking: string;
  mapNearMe: string;
  micTitle: string;
  micSubtitle: string;
  ready: string;
  listening: string;
  stopListening: string;
  transcribing: string;
  transcriptTitle: string;
  transcriptHint: string;
  transcriptPlaceholder: string;
  transcriptYes: string;
  sayAgain: string;
  transcriptError: string;
  youSaid: string;
  sahayaSays: string;
  repeat: string;
  fallbackReply: string;
  conversationHint: string;
  footerPrivacy: string;
  footerRates: string;
  restarted: string;
};

const english: SahayaCopy = {
  languageName: "English",
  chooseLanguage: "Choose your language",
  chooseLanguageHint: "Sahaya will speak and show help in the language you choose.",
  brandTagline: "Help for women, in your voice",
  calmHeadline: "You are not alone. Speak, and Sahaya will help.",
  helpTitle: "How Sahaya works",
  helpBody: "Tap the microphone, speak naturally, and Sahaya will first show what it heard before answering.",
  assistantNote: "Sahaya is an automated assistant, not a person.",
  trustedMenu: "Trusted people",
  languageMenu: "Language",
  silentMode: "Silent mode",
  silentOn: "On: no audio",
  silentOff: "Off: voice replies on",
  trustedTitle: "Your trusted people",
  trustedIntro: "Add three people you trust. They can help you when you press the red help button.",
  trustedSetupHint: "Please add at least 3 people before using Get help now.",
  trustedMinimum: "Add at least 3 people",
  trustedMaximum: "You can save up to 5 people",
  contactName: "Name or relation",
  contactNamePlaceholder: "Example: Mother",
  phoneNumber: "Phone number",
  phonePlaceholder: "10 digit number",
  phoneError: "Enter a valid 10-digit mobile number.",
  nameError: "Enter a name or relation.",
  consent: "These numbers stay on this phone only and are used only when you press the red button.",
  addPerson: "Add person",
  savePeople: "Save trusted people",
  savedPeople: "Saved trusted people",
  close: "Close",
  delete: "Delete",
  edit: "Edit",
  testMessage: "Send test message",
  testMessageBody: "This is a test message from Sahaya.",
  saveAtLeast: "Save at least 3 valid contacts to continue.",
  emergencyLabel: "Get help now",
  emergencySubtitle: "Calls 112 and alerts your trusted people",
  emergencySetupHint: "Add 3 trusted people first. Your red help button will stay ready after that.",
  locationWorking: "Getting your location...",
  locationDenied: "Location was not shared. 112 was opened and the message has no location link.",
  locationUnavailable: "Location is not available. 112 was opened and the message has no location link.",
  emergencyOpened: "112 and your messages app are open. Tap Send in your messages app.",
  sendSheetTitle: "Send to your trusted people",
  sendSheetBody: "Your message is ready. Open each contact and tap Send in your messages app.",
  sendTo: (name) => `Send to ${name}`,
  whatsapp: "WhatsApp",
  tapSend: "Tap Send in the app",
  closeSheet: "Done",
  noLocation: "Location was not shared. Showing places near you.",
  police: "Police station",
  policeSubtitle: "Find help nearby",
  hospital: "Hospital",
  hospitalSubtitle: "Find medical help nearby",
  mapWorking: "Finding places near you...",
  mapNearMe: "Location was not shared. Search is open for places near me.",
  micTitle: "Speak to Sahaya",
  micSubtitle: "Tell us what is happening",
  ready: "Ready",
  listening: "Listening... speak now",
  stopListening: "Tap to stop",
  transcribing: "Understanding your words...",
  transcriptTitle: "This is what I heard",
  transcriptHint: "You can change the words before Sahaya answers.",
  transcriptPlaceholder: "Your words will appear here",
  transcriptYes: "Yes, this is right",
  sayAgain: "Say again",
  transcriptError: "I could not hear that clearly. Please say it again.",
  youSaid: "You said",
  sahayaSays: "Sahaya says",
  repeat: "Repeat",
  fallbackReply: "Sahaya could not answer right now. Call 112 or 181.",
  conversationHint: "Your words and Sahaya's answer stay together here.",
  footerPrivacy: "Your trusted people stay on this phone",
  footerRates: "Emergency calls depend on your phone network",
  restarted: "Ready for your next question",
};

const hindi: SahayaCopy = {
  ...english,
  languageName: "हिंदी",
  chooseLanguage: "अपनी भाषा चुनें",
  chooseLanguageHint: "सहाय आपकी चुनी हुई भाषा में बोलेगी और मदद दिखाएगी।",
  brandTagline: "महिलाओं की मदद, आपकी आवाज़ में",
  calmHeadline: "आप अकेली नहीं हैं। बोलिए, सहाय मदद करेगी।",
  helpTitle: "सहाय कैसे काम करती है",
  helpBody: "माइक दबाकर बोलिए। सहाय पहले आपकी सुनी हुई बात दिखाएगी, फिर जवाब देगी।",
  assistantNote: "सहाय एक स्वचालित सहायक है, इंसान नहीं।",
  trustedMenu: "भरोसेमंद लोग",
  languageMenu: "भाषा",
  silentMode: "शांत मोड",
  silentOn: "चालू: आवाज़ बंद",
  silentOff: "बंद: आवाज़ चालू",
  trustedTitle: "आपके भरोसेमंद लोग",
  trustedIntro: "तीन भरोसेमंद लोगों का नाम और मोबाइल नंबर जोड़ें। लाल मदद बटन दबाने पर उन्हें खबर मिलेगी।",
  trustedSetupHint: "लाल मदद बटन इस्तेमाल करने से पहले कम से कम 3 लोग जोड़ें।",
  trustedMinimum: "कम से कम 3 लोग जोड़ें",
  trustedMaximum: "आप अधिकतम 5 लोग जोड़ सकती हैं",
  contactName: "नाम या रिश्ता",
  contactNamePlaceholder: "जैसे: मां",
  phoneNumber: "मोबाइल नंबर",
  phonePlaceholder: "10 अंकों का नंबर",
  phoneError: "10 अंकों का सही मोबाइल नंबर डालें।",
  nameError: "नाम या रिश्ता लिखें।",
  consent: "ये नंबर सिर्फ़ इसी फोन में रहेंगे और लाल बटन दबाने पर ही इस्तेमाल होंगे।",
  addPerson: "व्यक्ति जोड़ें",
  savePeople: "भरोसेमंद लोग सुरक्षित करें",
  savedPeople: "सहेजे गए भरोसेमंद लोग",
  close: "बंद करें",
  delete: "हटाएं",
  edit: "बदलें",
  testMessage: "टेस्ट संदेश भेजें",
  testMessageBody: "यह सहाय की ओर से एक टेस्ट संदेश है।",
  saveAtLeast: "आगे बढ़ने के लिए कम से कम 3 सही संपर्क सुरक्षित करें।",
  emergencyLabel: "अभी मदद लें",
  emergencySubtitle: "112 पर कॉल और आपके भरोसेमंद लोगों को खबर",
  emergencySetupHint: "पहले 3 भरोसेमंद लोग जोड़ें। उसके बाद लाल मदद बटन तैयार रहेगा।",
  locationWorking: "आपकी जगह पता कर रहे हैं...",
  locationDenied: "जगह साझा नहीं हुई। 112 खोला गया है और संदेश में जगह का लिंक नहीं है।",
  locationUnavailable: "जगह उपलब्ध नहीं है। 112 खोला गया है और संदेश में जगह का लिंक नहीं है।",
  emergencyOpened: "112 और संदेश ऐप खुल गए हैं। संदेश ऐप में Send दबाएं।",
  sendSheetTitle: "भरोसेमंद लोगों को भेजें",
  sendSheetBody: "संदेश तैयार है। हर व्यक्ति के लिए खोलकर संदेश ऐप में Send दबाएं।",
  sendTo: (name) => `${name} को भेजें`,
  whatsapp: "व्हाट्सऐप",
  tapSend: "ऐप में Send दबाएं",
  closeSheet: "ठीक है",
  noLocation: "जगह साझा नहीं हुई। आपके पास की जगहें दिखा रहे हैं।",
  police: "पुलिस स्टेशन",
  policeSubtitle: "पास में मदद ढूंढें",
  hospital: "अस्पताल",
  hospitalSubtitle: "पास में इलाज ढूंढें",
  mapWorking: "आपके पास की जगहें ढूंढ रहे हैं...",
  mapNearMe: "जगह साझा नहीं हुई। आपके पास की जगहों की खोज खुल गई है।",
  micTitle: "सहाय से बोलें",
  micSubtitle: "बताइए क्या हो रहा है",
  ready: "तैयार",
  listening: "सुन रही हूं... अब बोलिए",
  stopListening: "रोकने के लिए दबाएं",
  transcribing: "आपकी बात समझ रहे हैं...",
  transcriptTitle: "सहाय ने यह सुना",
  transcriptHint: "सहाय के जवाब से पहले आप शब्द बदल सकती हैं।",
  transcriptPlaceholder: "आपकी बात यहां दिखेगी",
  transcriptYes: "हां, यह सही है",
  sayAgain: "फिर बोलें",
  transcriptError: "बात साफ़ सुनाई नहीं दी। फिर से बोलें।",
  youSaid: "आपने कहा",
  sahayaSays: "सहाय का जवाब",
  repeat: "फिर सुनें",
  fallbackReply: "सहाय अभी जवाब नहीं दे पाई। 112 या 181 पर कॉल करें।",
  conversationHint: "आपकी बात और सहाय का जवाब यहां साथ दिखेगा।",
  footerPrivacy: "आपके भरोसेमंद लोग इसी फोन में रहते हैं",
  footerRates: "आपातकालीन कॉल फोन नेटवर्क पर निर्भर हैं",
  restarted: "आपका अगला सवाल सुनने के लिए तैयार",
};

const bengali: SahayaCopy = {
  ...english,
  languageName: "বাংলা",
  chooseLanguage: "আপনার ভাষা বেছে নিন",
  chooseLanguageHint: "সহায় আপনার বেছে নেওয়া ভাষায় কথা বলবে এবং সাহায্য দেখাবে।",
  brandTagline: "মহিলাদের সাহায্য, আপনার কণ্ঠে",
  calmHeadline: "আপনি একা নন। বলুন, সহায় সাহায্য করবে।",
  helpTitle: "সহায় কীভাবে কাজ করে",
  helpBody: "মাইকে চাপ দিয়ে বলুন। সহায় আগে যা শুনেছে তা দেখাবে, তারপর উত্তর দেবে।",
  assistantNote: "সহায় একটি স্বয়ংক্রিয় সহায়ক, মানুষ নয়।",
  trustedMenu: "বিশ্বস্ত মানুষ",
  languageMenu: "ভাষা",
  silentMode: "নীরব মোড",
  silentOn: "চালু: শব্দ বন্ধ",
  silentOff: "বন্ধ: শব্দ চালু",
  trustedTitle: "আপনার বিশ্বস্ত মানুষ",
  trustedIntro: "তিনজন বিশ্বস্ত মানুষের নাম ও মোবাইল নম্বর যোগ করুন। লাল সাহায্য বোতাম চাপলে তাদের খবর যাবে।",
  trustedSetupHint: "লাল সাহায্য বোতাম ব্যবহারের আগে অন্তত ৩ জন যোগ করুন।",
  trustedMinimum: "অন্তত ৩ জন যোগ করুন",
  trustedMaximum: "সর্বোচ্চ ৫ জন রাখা যাবে",
  contactName: "নাম বা সম্পর্ক",
  contactNamePlaceholder: "যেমন: মা",
  phoneNumber: "মোবাইল নম্বর",
  phoneError: "সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।",
  nameError: "নাম বা সম্পর্ক লিখুন।",
  consent: "এই নম্বরগুলি শুধু এই ফোনে থাকবে এবং লাল বোতাম চাপলেই ব্যবহার হবে।",
  addPerson: "মানুষ যোগ করুন",
  savePeople: "বিশ্বস্ত মানুষ সংরক্ষণ করুন",
  savedPeople: "সংরক্ষিত বিশ্বস্ত মানুষ",
  close: "বন্ধ করুন",
  delete: "মুছুন",
  edit: "বদলান",
  testMessage: "পরীক্ষার বার্তা পাঠান",
  testMessageBody: "এটি সহায়ের একটি পরীক্ষার বার্তা।",
  saveAtLeast: "আগে যেতে অন্তত ৩টি সঠিক যোগাযোগ সংরক্ষণ করুন।",
  emergencyLabel: "এখন সাহায্য নিন",
  emergencySubtitle: "১১২-এ কল এবং আপনার বিশ্বস্ত মানুষকে খবর",
  emergencySetupHint: "আগে ৩ জন বিশ্বস্ত মানুষ যোগ করুন। তারপর লাল সাহায্য বোতাম প্রস্তুত থাকবে।",
  locationWorking: "আপনার অবস্থান খুঁজছি...",
  locationDenied: "অবস্থান শেয়ার হয়নি। ১১২ খোলা হয়েছে, বার্তায় অবস্থানের লিঙ্ক নেই।",
  locationUnavailable: "অবস্থান পাওয়া যায়নি। ১১২ খোলা হয়েছে, বার্তায় অবস্থানের লিঙ্ক নেই।",
  emergencyOpened: "১১২ এবং বার্তা অ্যাপ খোলা হয়েছে। বার্তা অ্যাপে Send চাপুন।",
  sendSheetTitle: "বিশ্বস্ত মানুষকে পাঠান",
  sendSheetBody: "বার্তা তৈরি আছে। প্রত্যেকের জন্য খুলে বার্তা অ্যাপে Send চাপুন।",
  sendTo: (name) => `${name}-কে পাঠান`,
  whatsapp: "হোয়াটসঅ্যাপ",
  tapSend: "অ্যাপে Send চাপুন",
  closeSheet: "ঠিক আছে",
  noLocation: "অবস্থান শেয়ার হয়নি। আপনার কাছের জায়গা দেখানো হচ্ছে।",
  police: "পুলিশ স্টেশন",
  policeSubtitle: "কাছাকাছি সাহায্য খুঁজুন",
  hospital: "হাসপাতাল",
  hospitalSubtitle: "কাছাকাছি চিকিৎসা খুঁজুন",
  mapWorking: "আপনার কাছের জায়গা খুঁজছি...",
  mapNearMe: "অবস্থান শেয়ার হয়নি। কাছের জায়গার খোঁজ খোলা হয়েছে।",
  micTitle: "সহায়ের সঙ্গে বলুন",
  micSubtitle: "কী হচ্ছে বলুন",
  ready: "প্রস্তুত",
  listening: "শুনছি... এখন বলুন",
  stopListening: "থামাতে চাপুন",
  transcribing: "আপনার কথা বুঝছি...",
  transcriptTitle: "সহায় যা শুনেছে",
  transcriptHint: "উত্তর দেওয়ার আগে শব্দ বদলাতে পারেন।",
  transcriptPlaceholder: "আপনার কথা এখানে দেখা যাবে",
  transcriptYes: "হ্যাঁ, এটি ঠিক",
  sayAgain: "আবার বলুন",
  transcriptError: "স্পষ্ট শুনতে পাইনি। আবার বলুন।",
  youSaid: "আপনি বলেছেন",
  sahayaSays: "সহায়ের উত্তর",
  repeat: "আবার শুনুন",
  fallbackReply: "সহায় এখন উত্তর দিতে পারেনি। ১১২ বা ১৮১-এ কল করুন।",
  conversationHint: "আপনার কথা এবং সহায়ের উত্তর এখানে একসঙ্গে থাকবে।",
  footerPrivacy: "আপনার বিশ্বস্ত মানুষ এই ফোনেই থাকে",
  footerRates: "জরুরি কল ফোন নেটওয়ার্কের উপর নির্ভর করে",
  restarted: "আপনার পরের প্রশ্নের জন্য প্রস্তুত",
};

const telugu: SahayaCopy = {
  ...english,
  languageName: "తెలుగు",
  chooseLanguage: "మీ భాషను ఎంచుకోండి",
  chooseLanguageHint: "సహాయ మీరు ఎంచుకున్న భాషలో మాట్లాడి సహాయం చూపిస్తుంది.",
  brandTagline: "మహిళలకు సహాయం, మీ మాటల్లో",
  calmHeadline: "మీరు ఒంటరిగా లేరు. చెప్పండి, సహాయ సహాయం చేస్తుంది.",
  helpTitle: "సహాయ ఎలా పనిచేస్తుంది",
  helpBody: "మైక్ నొక్కి మాట్లాడండి. సహాయ ముందుగా విన్న మాటను చూపించి, తర్వాత సమాధానం ఇస్తుంది.",
  assistantNote: "సహాయ ఒక ఆటోమేటిక్ సహాయకురాలు, మనిషి కాదు.",
  trustedMenu: "నమ్మకమైన వ్యక్తులు",
  languageMenu: "భాష",
  silentMode: "నిశ్శబ్ద మోడ్",
  silentOn: "ఆన్: శబ్దం లేదు",
  silentOff: "ఆఫ్: వాయిస్ సమాధానాలు",
  trustedTitle: "మీ నమ్మకమైన వ్యక్తులు",
  trustedIntro: "మీరు నమ్మే ముగ్గురి పేరు మరియు మొబైల్ నంబర్ జోడించండి. ఎరుపు సహాయం బటన్ నొక్కితే వారికి సమాచారం వెళ్తుంది.",
  trustedSetupHint: "ఎరుపు సహాయం బటన్ ఉపయోగించే ముందు కనీసం 3 మందిని జోడించండి.",
  trustedMinimum: "కనీసం 3 మందిని జోడించండి",
  trustedMaximum: "గరిష్టంగా 5 మందిని సేవ్ చేయవచ్చు",
  contactName: "పేరు లేదా సంబంధం",
  contactNamePlaceholder: "ఉదాహరణ: అమ్మ",
  phoneNumber: "మొబైల్ నంబర్",
  phoneError: "10 అంకెల సరైన మొబైల్ నంబర్ ఇవ్వండి.",
  nameError: "పేరు లేదా సంబంధం రాయండి.",
  consent: "ఈ నంబర్లు ఈ ఫోన్‌లోనే ఉంటాయి. ఎరుపు బటన్ నొక్కినప్పుడు మాత్రమే ఉపయోగిస్తాం.",
  addPerson: "వ్యక్తిని జోడించండి",
  savePeople: "నమ్మకమైన వారిని సేవ్ చేయండి",
  savedPeople: "సేవ్ చేసిన నమ్మకమైన వ్యక్తులు",
  close: "మూసివేయండి",
  delete: "తొలగించండి",
  edit: "మార్చండి",
  testMessage: "పరీక్ష సందేశం పంపండి",
  testMessageBody: "ఇది సహాయ నుంచి వచ్చిన పరీక్ష సందేశం.",
  saveAtLeast: "ముందుకు వెళ్లడానికి కనీసం 3 సరైన పరిచయాలను సేవ్ చేయండి.",
  emergencyLabel: "ఇప్పుడే సహాయం పొందండి",
  emergencySubtitle: "112 కు కాల్ చేసి మీ నమ్మకమైన వారికి సమాచారం",
  emergencySetupHint: "ముందుగా 3 నమ్మకమైన వ్యక్తులను జోడించండి. తర్వాత ఎరుపు బటన్ సిద్ధంగా ఉంటుంది.",
  locationWorking: "మీ ప్రదేశాన్ని కనుగొంటున్నాం...",
  locationDenied: "ప్రదేశం భాగస్వామ్యం కాలేదు. 112 తెరవబడింది, సందేశంలో ప్రదేశ లింక్ లేదు.",
  locationUnavailable: "ప్రదేశం అందుబాటులో లేదు. 112 తెరవబడింది, సందేశంలో ప్రదేశ లింక్ లేదు.",
  emergencyOpened: "112 మరియు సందేశ యాప్ తెరిచాం. సందేశ యాప్‌లో Send నొక్కండి.",
  sendSheetTitle: "నమ్మకమైన వారికి పంపండి",
  sendSheetBody: "సందేశం సిద్ధంగా ఉంది. ప్రతి వ్యక్తికి తెరిచి సందేశ యాప్‌లో Send నొక్కండి.",
  sendTo: (name) => `${name}కు పంపండి`,
  whatsapp: "వాట్సాప్",
  tapSend: "యాప్‌లో Send నొక్కండి",
  closeSheet: "సరే",
  noLocation: "ప్రదేశం భాగస్వామ్యం కాలేదు. మీ దగ్గర స్థలాలను చూపిస్తున్నాం.",
  police: "పోలీస్ స్టేషన్",
  policeSubtitle: "దగ్గరలో సహాయం వెతకండి",
  hospital: "ఆసుపత్రి",
  hospitalSubtitle: "దగ్గరలో వైద్యం వెతకండి",
  mapWorking: "మీ దగ్గర స్థలాలను వెతుకుతున్నాం...",
  mapNearMe: "ప్రదేశం భాగస్వామ్యం కాలేదు. దగ్గరలోని స్థలాల శోధన తెరిచాం.",
  micTitle: "సహాయతో మాట్లాడండి",
  micSubtitle: "ఏం జరుగుతుందో చెప్పండి",
  ready: "సిద్ధం",
  listening: "వింటున్నాను... ఇప్పుడు చెప్పండి",
  stopListening: "ఆపడానికి నొక్కండి",
  transcribing: "మీ మాటలను అర్థం చేసుకుంటున్నాం...",
  transcriptTitle: "సహాయ విన్నది",
  transcriptHint: "సహాయ సమాధానం చెప్పే ముందు మాటలు మార్చవచ్చు.",
  transcriptPlaceholder: "మీ మాటలు ఇక్కడ కనిపిస్తాయి",
  transcriptYes: "అవును, ఇది సరైనది",
  sayAgain: "మళ్లీ చెప్పండి",
  transcriptError: "స్పష్టంగా వినిపించలేదు. మళ్లీ చెప్పండి.",
  youSaid: "మీరు చెప్పింది",
  sahayaSays: "సహాయ సమాధానం",
  repeat: "మళ్లీ వినండి",
  fallbackReply: "సహాయ ఇప్పుడు సమాధానం ఇవ్వలేకపోయింది. 112 లేదా 181 కు కాల్ చేయండి.",
  conversationHint: "మీ మాటలు మరియు సహాయ సమాధానం ఇక్కడ కలిసి ఉంటాయి.",
  footerPrivacy: "మీ నమ్మకమైన వ్యక్తులు ఈ ఫోన్‌లోనే ఉంటారు",
  footerRates: "అత్యవసర కాల్స్ ఫోన్ నెట్‌వర్క్‌పై ఆధారపడి ఉంటాయి",
  restarted: "మీ తదుపరి ప్రశ్నకు సిద్ధంగా ఉంది",
};

const tamil: SahayaCopy = {
  ...english,
  languageName: "தமிழ்",
  chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
  chooseLanguageHint: "சஹாயா நீங்கள் தேர்ந்தெடுத்த மொழியில் பேசி உதவும்.",
  brandTagline: "பெண்களுக்கு உதவி, உங்கள் குரலில்",
  calmHeadline: "நீங்கள் தனியாக இல்லை. பேசுங்கள், சகாயா உதவும்.",
  helpTitle: "சஹாயா எப்படி வேலை செய்கிறது",
  helpBody: "மைக் அழுத்திப் பேசுங்கள். சஹாயா முதலில் கேட்டதை காட்டி, பிறகு பதில் சொல்லும்.",
  assistantNote: "சஹாயா ஒரு தானியங்கி உதவியாளர், மனிதர் அல்ல.",
  trustedMenu: "நம்பிக்கையானவர்கள்",
  languageMenu: "மொழி",
  silentMode: "அமைதியான முறை",
  silentOn: "இயக்கம்: ஒலி இல்லை",
  silentOff: "நிறுத்தம்: குரல் பதில்",
  trustedTitle: "உங்கள் நம்பிக்கையானவர்கள்",
  trustedIntro: "நீங்கள் நம்பும் மூன்று பேரின் பெயர் மற்றும் கைபேசி எண்ணைச் சேர்க்கவும். சிவப்பு உதவி பொத்தானை அழுத்தினால் அவர்களுக்குத் தகவல் செல்லும்.",
  trustedSetupHint: "சிவப்பு உதவி பொத்தானைப் பயன்படுத்த முதலில் குறைந்தது 3 பேரைச் சேர்க்கவும்.",
  trustedMinimum: "குறைந்தது 3 பேரைச் சேர்க்கவும்",
  trustedMaximum: "அதிகபட்சம் 5 பேரைச் சேமிக்கலாம்",
  contactName: "பெயர் அல்லது உறவு",
  contactNamePlaceholder: "உதாரணம்: அம்மா",
  phoneNumber: "கைபேசி எண்",
  phoneError: "10 இலக்க சரியான கைபேசி எண்ணை உள்ளிடவும்.",
  nameError: "பெயர் அல்லது உறவை எழுதவும்.",
  consent: "இந்த எண்கள் இந்த கைபேசியில் மட்டும் இருக்கும். சிவப்பு பொத்தானை அழுத்தினால் மட்டும் பயன்படும்.",
  addPerson: "நபரைச் சேர்க்கவும்",
  savePeople: "நம்பிக்கையானவர்களைச் சேமிக்கவும்",
  savedPeople: "சேமித்த நம்பிக்கையானவர்கள்",
  close: "மூடவும்",
  delete: "நீக்கவும்",
  edit: "மாற்றவும்",
  testMessage: "சோதனை செய்தி அனுப்பவும்",
  testMessageBody: "இது சஹாயாவிடமிருந்து வரும் சோதனை செய்தி.",
  saveAtLeast: "தொடர குறைந்தது 3 சரியான தொடர்புகளைச் சேமிக்கவும்.",
  emergencyLabel: "இப்போது உதவி பெறுங்கள்",
  emergencySubtitle: "112-க்கு அழைத்து உங்கள் நம்பிக்கையானவர்களுக்கு தகவல்",
  emergencySetupHint: "முதலில் 3 நம்பிக்கையானவர்களைச் சேர்க்கவும். பிறகு சிவப்பு பொத்தான் தயாராக இருக்கும்.",
  locationWorking: "உங்கள் இருப்பிடத்தைக் கண்டறிகிறோம்...",
  locationDenied: "இருப்பிடம் பகிரப்படவில்லை. 112 திறக்கப்பட்டது; செய்தியில் இருப்பிட இணைப்பு இல்லை.",
  locationUnavailable: "இருப்பிடம் கிடைக்கவில்லை. 112 திறக்கப்பட்டது; செய்தியில் இருப்பிட இணைப்பு இல்லை.",
  emergencyOpened: "112 மற்றும் செய்தி செயலி திறக்கப்பட்டன. செய்தி செயலியில் Send அழுத்தவும்.",
  sendSheetTitle: "நம்பிக்கையானவர்களுக்கு அனுப்பவும்",
  sendSheetBody: "செய்தி தயாராக உள்ளது. ஒவ்வொருவரையும் திறந்து செய்தி செயலியில் Send அழுத்தவும்.",
  sendTo: (name) => `${name}-க்கு அனுப்பவும்`,
  whatsapp: "வாட்ஸ்அப்",
  tapSend: "செயலியில் Send அழுத்தவும்",
  closeSheet: "சரி",
  noLocation: "இருப்பிடம் பகிரப்படவில்லை. அருகிலுள்ள இடங்களை காட்டுகிறோம்.",
  police: "காவல் நிலையம்",
  policeSubtitle: "அருகில் உதவி தேடுங்கள்",
  hospital: "மருத்துவமனை",
  hospitalSubtitle: "அருகில் சிகிச்சை தேடுங்கள்",
  mapWorking: "அருகிலுள்ள இடங்களைத் தேடுகிறோம்...",
  mapNearMe: "இருப்பிடம் பகிரப்படவில்லை. அருகிலுள்ள இடங்களின் தேடல் திறக்கப்பட்டது.",
  micTitle: "சஹாயாவிடம் பேசுங்கள்",
  micSubtitle: "என்ன நடக்கிறது என்று சொல்லுங்கள்",
  ready: "தயார்",
  listening: "கேட்கிறேன்... இப்போது பேசுங்கள்",
  stopListening: "நிறுத்த அழுத்தவும்",
  transcribing: "உங்கள் வார்த்தைகளைப் புரிந்துகொள்கிறோம்...",
  transcriptTitle: "சஹாயா கேட்டது",
  transcriptHint: "சஹாயா பதில் சொல்லும் முன் வார்த்தைகளை மாற்றலாம்.",
  transcriptPlaceholder: "உங்கள் வார்த்தைகள் இங்கே தோன்றும்",
  transcriptYes: "ஆம், இது சரி",
  sayAgain: "மீண்டும் சொல்லுங்கள்",
  transcriptError: "தெளிவாக கேட்கவில்லை. மீண்டும் சொல்லுங்கள்.",
  youSaid: "நீங்கள் சொன்னது",
  sahayaSays: "சஹாயாவின் பதில்",
  repeat: "மீண்டும் கேளுங்கள்",
  fallbackReply: "சஹாயா இப்போது பதில் சொல்ல முடியவில்லை. 112 அல்லது 181-க்கு அழைக்கவும்.",
  conversationHint: "உங்கள் வார்த்தைகளும் சஹாயாவின் பதிலும் இங்கே இருக்கும்.",
  footerPrivacy: "உங்கள் நம்பிக்கையானவர்கள் இந்த கைபேசியில் மட்டும் இருப்பார்கள்",
  footerRates: "அவசர அழைப்புகள் கைபேசி வலையமைப்பை சார்ந்தவை",
  restarted: "உங்கள் அடுத்த கேள்விக்குத் தயாராக உள்ளது",
};

const marathi: SahayaCopy = { ...hindi, languageName: "मराठी", chooseLanguage: "तुमची भाषा निवडा", chooseLanguageHint: "सहाय तुमच्या निवडलेल्या भाषेत बोलेल आणि मदत दाखवेल.", brandTagline: "महिलांसाठी मदत, तुमच्या आवाजात", assistantNote: "सहाय एक स्वयंचलित मदतनीस आहे, माणूस नाही.", trustedMenu: "विश्वासू लोक", trustedTitle: "तुमचे विश्वासू लोक", trustedIntro: "तुम्ही विश्वास ठेवता अशा तीन लोकांची नावे आणि मोबाइल क्रमांक जोडा.", trustedSetupHint: "लाल मदत बटण वापरण्यापूर्वी किमान 3 लोक जोडा.", contactName: "नाव किंवा नाते", contactNamePlaceholder: "उदा.: आई", phoneNumber: "मोबाइल क्रमांक", phoneError: "10 अंकी योग्य मोबाइल क्रमांक द्या.", consent: "हे क्रमांक फक्त या फोनवर राहतील आणि लाल बटण दाबल्यावरच वापरले जातील.", addPerson: "व्यक्ती जोडा", savePeople: "विश्वासू लोक जतन करा", savedPeople: "जतन केलेले विश्वासू लोक", delete: "काढा", edit: "बदला", testMessage: "चाचणी संदेश पाठवा", saveAtLeast: "पुढे जाण्यासाठी किमान 3 योग्य संपर्क जतन करा.", emergencyLabel: "आत्ता मदत घ्या", emergencySubtitle: "112 ला कॉल आणि तुमच्या विश्वासू लोकांना सूचना", police: "पोलीस ठाणे", policeSubtitle: "जवळची मदत शोधा", hospital: "रुग्णालय", hospitalSubtitle: "जवळचे उपचार शोधा", micTitle: "सहायशी बोला", micSubtitle: "काय होत आहे ते सांगा", ready: "तयार", listening: "ऐकत आहे... आता बोला", stopListening: "थांबवण्यासाठी दाबा", transcribing: "तुमचे शब्द समजून घेत आहे...", transcriptTitle: "सहायने हे ऐकले", transcriptHint: "सहाय उत्तर देण्यापूर्वी शब्द बदलू शकता.", transcriptYes: "हो, हे बरोबर आहे", sayAgain: "पुन्हा बोला", youSaid: "तुम्ही सांगितले", sahayaSays: "सहायचे उत्तर", repeat: "पुन्हा ऐका", fallbackReply: "सहाय आत्ता उत्तर देऊ शकली नाही. 112 किंवा 181 वर कॉल करा.", restarted: "तुमच्या पुढच्या प्रश्नासाठी तयार", footerPrivacy: "तुमचे विश्वासू लोक या फोनवरच राहतात" };
const gujarati: SahayaCopy = { ...hindi, languageName: "ગુજરાતી", chooseLanguage: "તમારી ભાષા પસંદ કરો", chooseLanguageHint: "સહાય તમારી પસંદ કરેલી ભાષામાં બોલશે અને મદદ બતાવશે.", brandTagline: "મહિલાઓ માટે મદદ, તમારા અવાજમાં", assistantNote: "સહાય એક સ્વચાલિત મદદગાર છે, વ્યક્તિ નથી.", trustedMenu: "વિશ્વાસુ લોકો", trustedTitle: "તમારા વિશ્વાસુ લોકો", trustedIntro: "તમે વિશ્વાસ કરો છો એવા ત્રણ લોકોના નામ અને મોબાઇલ નંબર ઉમેરો.", trustedSetupHint: "લાલ મદદ બટન વાપરતા પહેલાં ઓછામાં ઓછા 3 લોકો ઉમેરો.", contactName: "નામ અથવા સંબંધ", contactNamePlaceholder: "જેમ કે: મા", phoneNumber: "મોબાઇલ નંબર", phoneError: "10 અંકનો સાચો મોબાઇલ નંબર નાખો.", consent: "આ નંબર ફક્ત આ ફોનમાં રહેશે અને લાલ બટન દબાવશો ત્યારે જ વપરાશે.", addPerson: "વ્યક્તિ ઉમેરો", savePeople: "વિશ્વાસુ લોકોને સાચવો", savedPeople: "સાચવેલા વિશ્વાસુ લોકો", delete: "કાઢો", edit: "બદલો", testMessage: "ટેસ્ટ સંદેશ મોકલો", saveAtLeast: "આગળ વધવા માટે ઓછામાં ઓછા 3 સાચા સંપર્કો સાચવો.", emergencyLabel: "હમણાં મદદ મેળવો", emergencySubtitle: "112 પર કોલ અને વિશ્વાસુ લોકોને જાણ", police: "પોલીસ સ્ટેશન", policeSubtitle: "નજીકની મદદ શોધો", hospital: "હોસ્પિટલ", hospitalSubtitle: "નજીકની સારવાર શોધો", micTitle: "સહાય સાથે બોલો", micSubtitle: "શું થઈ રહ્યું છે કહો", ready: "તૈયાર", listening: "સાંભળી રહી છું... હવે બોલો", stopListening: "રોકવા માટે દબાવો", transcribing: "તમારા શબ્દો સમજીએ છીએ...", transcriptTitle: "સહાયે આ સાંભળ્યું", transcriptHint: "સહાય જવાબ આપે તે પહેલાં શબ્દો બદલી શકો છો.", transcriptYes: "હા, આ સાચું છે", sayAgain: "ફરી કહો", youSaid: "તમે કહ્યું", sahayaSays: "સહાયનો જવાબ", repeat: "ફરી સાંભળો", fallbackReply: "સહાય અત્યારે જવાબ આપી શકી નથી. 112 અથવા 181 પર કોલ કરો.", restarted: "તમારા આગળના પ્રશ્ન માટે તૈયાર", footerPrivacy: "તમારા વિશ્વાસુ લોકો આ ફોનમાં જ રહે છે" };
const kannada: SahayaCopy = { ...english, languageName: "ಕನ್ನಡ", chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆರಿಸಿ", chooseLanguageHint: "ಸಹಾಯ ನೀವು ಆರಿಸಿದ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತದೆ.", brandTagline: "ಮಹಿಳೆಯರಿಗೆ ಸಹಾಯ, ನಿಮ್ಮ ಧ್ವನಿಯಲ್ಲಿ", assistantNote: "ಸಹಾಯ ಒಂದು ಸ್ವಯಂಚಾಲಿತ ಸಹಾಯಕಿ, ವ್ಯಕ್ತಿಯಲ್ಲ.", trustedMenu: "ನಂಬಿಕೆಯ ಜನರು", trustedTitle: "ನಿಮ್ಮ ನಂಬಿಕೆಯ ಜನರು", trustedIntro: "ನೀವು ನಂಬುವ ಮೂರು ಜನರ ಹೆಸರು ಮತ್ತು ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಸೇರಿಸಿ.", trustedSetupHint: "ಕೆಂಪು ಸಹಾಯ ಬಟನ್ ಬಳಸುವ ಮೊದಲು ಕನಿಷ್ಠ 3 ಜನರನ್ನು ಸೇರಿಸಿ.", contactName: "ಹೆಸರು ಅಥವಾ ಸಂಬಂಧ", contactNamePlaceholder: "ಉದಾ: ಅಮ್ಮ", phoneNumber: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", phoneError: "10 ಅಂಕಿಯ ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನೀಡಿ.", consent: "ಈ ಸಂಖ್ಯೆಗಳು ಈ ಫೋನ್‌ನಲ್ಲೇ ಇರುತ್ತವೆ ಮತ್ತು ಕೆಂಪು ಬಟನ್ ಒತ್ತಿದಾಗ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.", addPerson: "ವ್ಯಕ್ತಿ ಸೇರಿಸಿ", savePeople: "ನಂಬಿಕೆಯ ಜನರನ್ನು ಉಳಿಸಿ", savedPeople: "ಉಳಿಸಿದ ನಂಬಿಕೆಯ ಜನರು", delete: "ಅಳಿಸಿ", edit: "ಬದಲಿಸಿ", testMessage: "ಪರೀಕ್ಷಾ ಸಂದೇಶ ಕಳುಹಿಸಿ", saveAtLeast: "ಮುಂದುವರಿಯಲು ಕನಿಷ್ಠ 3 ಸರಿಯಾದ ಸಂಪರ್ಕಗಳನ್ನು ಉಳಿಸಿ.", emergencyLabel: "ಈಗ ಸಹಾಯ ಪಡೆಯಿರಿ", emergencySubtitle: "112 ಗೆ ಕರೆ ಮಾಡಿ ನಂಬಿಕೆಯ ಜನರಿಗೆ ತಿಳಿಸಿ", police: "ಪೊಲೀಸ್ ಠಾಣೆ", policeSubtitle: "ಹತ್ತಿರದ ಸಹಾಯ ಹುಡುಕಿ", hospital: "ಆಸ್ಪತ್ರೆ", hospitalSubtitle: "ಹತ್ತಿರದ ಚಿಕಿತ್ಸೆ ಹುಡುಕಿ", micTitle: "ಸಹಾಯದೊಂದಿಗೆ ಮಾತನಾಡಿ", micSubtitle: "ಏನಾಗುತ್ತಿದೆ ಹೇಳಿ", ready: "ಸಿದ್ಧ", listening: "ಕೇಳುತ್ತಿದ್ದೇನೆ... ಈಗ ಮಾತನಾಡಿ", stopListening: "ನಿಲ್ಲಿಸಲು ಒತ್ತಿರಿ", transcribing: "ನಿಮ್ಮ ಮಾತುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ...", transcriptTitle: "ಸಹಾಯ ಕೇಳಿದ್ದು", transcriptHint: "ಸಹಾಯ ಉತ್ತರಿಸುವ ಮೊದಲು ಪದಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು.", transcriptYes: "ಹೌದು, ಇದು ಸರಿ", sayAgain: "ಮತ್ತೆ ಹೇಳಿ", youSaid: "ನೀವು ಹೇಳಿದ್ದು", sahayaSays: "ಸಹಾಯದ ಉತ್ತರ", repeat: "ಮತ್ತೆ ಕೇಳಿ", fallbackReply: "ಸಹಾಯ ಈಗ ಉತ್ತರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. 112 ಅಥವಾ 181 ಗೆ ಕರೆ ಮಾಡಿ.", restarted: "ನಿಮ್ಮ ಮುಂದಿನ ಪ್ರಶ್ನೆಗೆ ಸಿದ್ಧ", footerPrivacy: "ನಿಮ್ಮ ನಂಬಿಕೆಯ ಜನರು ಈ ಫೋನ್‌ನಲ್ಲೇ ಇರುತ್ತಾರೆ" };
const malayalam: SahayaCopy = { ...english, languageName: "മലയാളം", chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക", chooseLanguageHint: "സഹായ നിങ്ങൾ തിരഞ്ഞെടുത്ത ഭാഷയിൽ സംസാരിക്കും.", brandTagline: "സ്ത്രീകൾക്ക് സഹായം, നിങ്ങളുടെ ശബ്ദത്തിൽ", assistantNote: "സഹായ ഒരു ഓട്ടോമാറ്റിക് സഹായിയാണ്, വ്യക്തിയല്ല.", trustedMenu: "വിശ്വസ്തർ", trustedTitle: "നിങ്ങളുടെ വിശ്വസ്തർ", trustedIntro: "നിങ്ങൾ വിശ്വസിക്കുന്ന മൂന്ന് പേരുടെ പേരും മൊബൈൽ നമ്പറും ചേർക്കുക.", trustedSetupHint: "ചുവന്ന സഹായ ബട്ടൺ ഉപയോഗിക്കുന്നതിന് മുമ്പ് കുറഞ്ഞത് 3 പേരെ ചേർക്കുക.", contactName: "പേര് അല്ലെങ്കിൽ ബന്ധം", contactNamePlaceholder: "ഉദാ: അമ്മ", phoneNumber: "മൊബൈൽ നമ്പർ", phoneError: "10 അക്കമുള്ള ശരിയായ മൊബൈൽ നമ്പർ നൽകുക.", consent: "ഈ നമ്പറുകൾ ഈ ഫോണിൽ മാത്രം തുടരും, ചുവന്ന ബട്ടൺ അമർത്തുമ്പോൾ മാത്രം ഉപയോഗിക്കും.", addPerson: "വ്യക്തിയെ ചേർക്കുക", savePeople: "വിശ്വസ്തരെ സംരക്ഷിക്കുക", savedPeople: "സംരക്ഷിച്ച വിശ്വസ്തർ", delete: "നീക്കം ചെയ്യുക", edit: "മാറ്റുക", testMessage: "പരീക്ഷാ സന്ദേശം അയയ്ക്കുക", saveAtLeast: "തുടരാൻ കുറഞ്ഞത് 3 ശരിയായ ബന്ധങ്ങൾ സംരക്ഷിക്കുക.", emergencyLabel: "ഇപ്പോൾ സഹായം നേടുക", emergencySubtitle: "112-ലേക്ക് വിളിച്ച് വിശ്വസ്തരെ അറിയിക്കുക", police: "പോലീസ് സ്റ്റേഷൻ", policeSubtitle: "അടുത്തുള്ള സഹായം കണ്ടെത്തുക", hospital: "ആശുപത്രി", hospitalSubtitle: "അടുത്തുള്ള ചികിത്സ കണ്ടെത്തുക", micTitle: "സഹായയോട് സംസാരിക്കുക", micSubtitle: "എന്താണ് സംഭവിക്കുന്നതെന്ന് പറയുക", ready: "തയ്യാർ", listening: "കേൾക്കുന്നു... ഇപ്പോൾ സംസാരിക്കുക", stopListening: "നിർത്താൻ അമർത്തുക", transcribing: "നിങ്ങളുടെ വാക്കുകൾ മനസ്സിലാക്കുന്നു...", transcriptTitle: "സഹായ കേട്ടത്", transcriptHint: "സഹായ മറുപടി നൽകുന്നതിന് മുമ്പ് വാക്കുകൾ മാറ്റാം.", transcriptYes: "അതെ, ഇത് ശരിയാണ്", sayAgain: "വീണ്ടും പറയുക", youSaid: "നിങ്ങൾ പറഞ്ഞത്", sahayaSays: "സഹായയുടെ മറുപടി", repeat: "വീണ്ടും കേൾക്കുക", fallbackReply: "സഹായയ്ക്ക് ഇപ്പോൾ മറുപടി നൽകാൻ കഴിഞ്ഞില്ല. 112 അല്ലെങ്കിൽ 181-ലേക്ക് വിളിക്കുക.", restarted: "നിങ്ങളുടെ അടുത്ത ചോദ്യത്തിന് തയ്യാറാണ്", footerPrivacy: "നിങ്ങളുടെ വിശ്വസ്തർ ഈ ഫോണിൽ മാത്രം തുടരും" };
const punjabi: SahayaCopy = { ...hindi, languageName: "ਪੰਜਾਬੀ", chooseLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ", chooseLanguageHint: "ਸਹਾਯਾ ਤੁਹਾਡੀ ਚੁਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਬੋਲੇਗੀ।", brandTagline: "ਔਰਤਾਂ ਲਈ ਮਦਦ, ਤੁਹਾਡੀ ਆਵਾਜ਼ ਵਿੱਚ", assistantNote: "ਸਹਾਯਾ ਇੱਕ ਸਵੈਚਾਲਿਤ ਸਹਾਇਕ ਹੈ, ਇਨਸਾਨ ਨਹੀਂ।", trustedMenu: "ਭਰੋਸੇਯੋਗ ਲੋਕ", trustedTitle: "ਤੁਹਾਡੇ ਭਰੋਸੇਯੋਗ ਲੋਕ", trustedIntro: "ਤਿੰਨ ਭਰੋਸੇਯੋਗ ਲੋਕਾਂ ਦੇ ਨਾਮ ਅਤੇ ਮੋਬਾਈਲ ਨੰਬਰ ਜੋੜੋ।", trustedSetupHint: "ਲਾਲ ਮਦਦ ਬਟਨ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਘੱਟੋ-ਘੱਟ 3 ਲੋਕ ਜੋੜੋ।", contactName: "ਨਾਮ ਜਾਂ ਰਿਸ਼ਤਾ", contactNamePlaceholder: "ਜਿਵੇਂ: ਮਾਂ", phoneNumber: "ਮੋਬਾਈਲ ਨੰਬਰ", phoneError: "10 ਅੰਕਾਂ ਦਾ ਸਹੀ ਮੋਬਾਈਲ ਨੰਬਰ ਪਾਓ।", consent: "ਇਹ ਨੰਬਰ ਸਿਰਫ਼ ਇਸ ਫੋਨ ਵਿੱਚ ਰਹਿਣਗੇ ਅਤੇ ਲਾਲ ਬਟਨ ਦਬਾਉਣ ਤੇ ਹੀ ਵਰਤੇ ਜਾਣਗੇ।", addPerson: "ਵਿਅਕਤੀ ਜੋੜੋ", savePeople: "ਭਰੋਸੇਯੋਗ ਲੋਕ ਸੁਰੱਖਿਅਤ ਕਰੋ", savedPeople: "ਸੁਰੱਖਿਅਤ ਭਰੋਸੇਯੋਗ ਲੋਕ", delete: "ਮਿਟਾਓ", edit: "ਬਦਲੋ", testMessage: "ਟੈਸਟ ਸੁਨੇਹਾ ਭੇਜੋ", saveAtLeast: "ਅੱਗੇ ਵਧਣ ਲਈ ਘੱਟੋ-ਘੱਟ 3 ਸਹੀ ਸੰਪਰਕ ਸੁਰੱਖਿਅਤ ਕਰੋ।", emergencyLabel: "ਹੁਣੇ ਮਦਦ ਲਵੋ", emergencySubtitle: "112 ਤੇ ਕਾਲ ਅਤੇ ਭਰੋਸੇਯੋਗ ਲੋਕਾਂ ਨੂੰ ਸੂਚਨਾ", police: "ਪੁਲਿਸ ਸਟੇਸ਼ਨ", policeSubtitle: "ਨੇੜੇ ਮਦਦ ਲੱਭੋ", hospital: "ਹਸਪਤਾਲ", hospitalSubtitle: "ਨੇੜੇ ਇਲਾਜ ਲੱਭੋ", micTitle: "ਸਹਾਯਾ ਨਾਲ ਬੋਲੋ", micSubtitle: "ਕੀ ਹੋ ਰਿਹਾ ਹੈ ਦੱਸੋ", ready: "ਤਿਆਰ", listening: "ਸੁਣ ਰਹੀ ਹਾਂ... ਹੁਣ ਬੋਲੋ", stopListening: "ਰੋਕਣ ਲਈ ਦਬਾਓ", transcribing: "ਤੁਹਾਡੀ ਗੱਲ ਸਮਝ ਰਹੇ ਹਾਂ...", transcriptTitle: "ਸਹਾਯਾ ਨੇ ਇਹ ਸੁਣਿਆ", transcriptHint: "ਜਵਾਬ ਤੋਂ ਪਹਿਲਾਂ ਸ਼ਬਦ ਬਦਲ ਸਕਦੇ ਹੋ।", transcriptYes: "ਹਾਂ, ਇਹ ਸਹੀ ਹੈ", sayAgain: "ਦੁਬਾਰਾ ਬੋਲੋ", youSaid: "ਤੁਸੀਂ ਕਿਹਾ", sahayaSays: "ਸਹਾਯਾ ਦਾ ਜਵਾਬ", repeat: "ਦੁਬਾਰਾ ਸੁਣੋ", fallbackReply: "ਸਹਾਯਾ ਹੁਣ ਜਵਾਬ ਨਹੀਂ ਦੇ ਸਕੀ। 112 ਜਾਂ 181 ਤੇ ਕਾਲ ਕਰੋ।", restarted: "ਤੁਹਾਡੇ ਅਗਲੇ ਸਵਾਲ ਲਈ ਤਿਆਰ", footerPrivacy: "ਤੁਹਾਡੇ ਭਰੋਸੇਯੋਗ ਲੋਕ ਇਸ ਫੋਨ ਵਿੱਚ ਹੀ ਰਹਿੰਦੇ ਹਨ" };
const odia: SahayaCopy = { ...english, languageName: "ଓଡ଼ିଆ", chooseLanguage: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ", chooseLanguageHint: "ସହାୟା ଆପଣ ବାଛିଥିବା ଭାଷାରେ କଥା କହିବ।", brandTagline: "ମହିଳାଙ୍କ ପାଇଁ ସାହାଯ୍ୟ, ଆପଣଙ୍କ କଣ୍ଠରେ", assistantNote: "ସହାୟା ଏକ ସ୍ୱୟଂଚାଳିତ ସହାୟକ, ମଣିଷ ନୁହେଁ।", trustedMenu: "ଭରସାଯୋଗ୍ୟ ଲୋକ", trustedTitle: "ଆପଣଙ୍କ ଭରସାଯୋଗ୍ୟ ଲୋକ", trustedIntro: "ତିନିଜଣ ଭରସାଯୋଗ୍ୟ ଲୋକଙ୍କ ନାମ ଓ ମୋବାଇଲ ନମ୍ବର ଯୋଡନ୍ତୁ।", trustedSetupHint: "ଲାଲ ସାହାଯ୍ୟ ବଟନ ବ୍ୟବହାର ପୂର୍ବରୁ ଅତି କମରେ 3 ଜଣଙ୍କୁ ଯୋଡନ୍ତୁ।", contactName: "ନାମ ବା ସମ୍ପର୍କ", contactNamePlaceholder: "ଯଥା: ମା", phoneNumber: "ମୋବାଇଲ ନମ୍ବର", phoneError: "10 ଅଙ୍କର ସଠିକ ମୋବାଇଲ ନମ୍ବର ଦିଅନ୍ତୁ।", consent: "ଏହି ନମ୍ବରଗୁଡ଼ିକ କେବଳ ଏହି ଫୋନରେ ରହିବ ଏବଂ ଲାଲ ବଟନ ଦବାଇଲେ ମାତ୍ର ବ୍ୟବହାର ହେବ।", addPerson: "ବ୍ୟକ୍ତି ଯୋଡନ୍ତୁ", savePeople: "ଭରସାଯୋଗ୍ୟ ଲୋକଙ୍କୁ ସଞ୍ଚୟ କରନ୍ତୁ", savedPeople: "ସଞ୍ଚିତ ଭରସାଯୋଗ୍ୟ ଲୋକ", delete: "ଡିଲିଟ କରନ୍ତୁ", edit: "ବଦଳାନ୍ତୁ", testMessage: "ପରୀକ୍ଷା ବାର୍ତ୍ତା ପଠାନ୍ତୁ", saveAtLeast: "ଆଗକୁ ବଢିବା ପାଇଁ ଅତି କମରେ 3ଟି ସଠିକ ସମ୍ପର୍କ ସଞ୍ଚୟ କରନ୍ତୁ।", emergencyLabel: "ଏବେ ସାହାଯ୍ୟ ନିଅନ୍ତୁ", emergencySubtitle: "112 କୁ କଲ ଏବଂ ଭରସାଯୋଗ୍ୟ ଲୋକଙ୍କୁ ସୂଚନା", police: "ପୋଲିସ ଷ୍ଟେସନ", policeSubtitle: "ନିକଟରେ ସାହାଯ୍ୟ ଖୋଜନ୍ତୁ", hospital: "ହସ୍ପିଟାଲ", hospitalSubtitle: "ନିକଟରେ ଚିକିତ୍ସା ଖୋଜନ୍ତୁ", micTitle: "ସହାୟା ସହିତ କଥା କହନ୍ତୁ", micSubtitle: "କଣ ଘଟୁଛି କୁହନ୍ତୁ", ready: "ପ୍ରସ୍ତୁତ", listening: "ଶୁଣୁଛି... ଏବେ କୁହନ୍ତୁ", stopListening: "ବନ୍ଦ କରିବାକୁ ଦବାନ୍ତୁ", transcribing: "ଆପଣଙ୍କ କଥା ବୁଝୁଛୁ...", transcriptTitle: "ସହାୟା ଏହା ଶୁଣିଲା", transcriptHint: "ଉତ୍ତର ପୂର୍ବରୁ ଶବ୍ଦ ବଦଳାଇ ପାରିବେ।", transcriptYes: "ହଁ, ଏହା ଠିକ", sayAgain: "ପୁଣି କୁହନ୍ତୁ", youSaid: "ଆପଣ କହିଲେ", sahayaSays: "ସହାୟାର ଉତ୍ତର", repeat: "ପୁଣି ଶୁଣନ୍ତୁ", fallbackReply: "ସହାୟା ଏବେ ଉତ୍ତର ଦେଇପାରିଲା ନାହିଁ। 112 କିମ୍ବା 181 କୁ କଲ କରନ୍ତୁ।", restarted: "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ପ୍ରଶ୍ନ ପାଇଁ ପ୍ରସ୍ତୁତ", footerPrivacy: "ଆପଣଙ୍କ ଭରସାଯୋଗ୍ୟ ଲୋକ ଏହି ଫୋନରେ ରହିବେ" };

export const languageOptions: Array<{ key: LanguageKey; label: string; speech: string }> = [
  { key: "en", label: "English", speech: "en-IN" },
  { key: "hi", label: "हिंदी", speech: "hi-IN" },
  { key: "bn", label: "বাংলা", speech: "bn-IN" },
  { key: "te", label: "తెలుగు", speech: "te-IN" },
  { key: "ta", label: "தமிழ்", speech: "ta-IN" },
  { key: "mr", label: "मराठी", speech: "mr-IN" },
  { key: "gu", label: "ગુજરાતી", speech: "gu-IN" },
  { key: "kn", label: "ಕನ್ನಡ", speech: "kn-IN" },
  { key: "ml", label: "മലയാളം", speech: "ml-IN" },
  { key: "pa", label: "ਪੰਜਾਬੀ", speech: "pa-IN" },
  { key: "or", label: "ଓଡ଼ିଆ", speech: "or-IN" },
];

export const calmHeadlines: Record<LanguageKey, string> = {
  en: "You are not alone. Speak, and Sahaya will help.",
  hi: "आप अकेली नहीं हैं। बोलिए, सहाय मदद करेगी।",
  bn: "আপনি একা নন। বলুন, সহায় সাহায্য করবে।",
  te: "మీరు ఒంటరిగా లేరు. చెప్పండి, సహాయ సహాయం చేస్తుంది.",
  ta: "நீங்கள் தனியாக இல்லை. பேசுங்கள், சகாயா உதவும்.",
  mr: "तुम्ही एकट्या नाही. बोला, सहाय मदत करेल.",
  gu: "તમે એકલા નથી. બોલો, સહાય મદદ કરશે.",
  kn: "ನೀವು ಒಬ್ಬರಲ್ಲ. ಮಾತನಾಡಿ, ಸಹಾಯಾ ನೆರವಾಗುತ್ತದೆ.",
  ml: "നിങ്ങൾ ഒറ്റയ്ക്കല്ല. സംസാരിക്കൂ, സഹായ സഹായിക്കും.",
  pa: "ਤੁਸੀਂ ਇਕੱਲੇ ਨਹੀਂ ਹੋ। ਬੋਲੋ, ਸਹਾਯਾ ਮਦਦ ਕਰੇਗੀ।",
  or: "ଆପଣ ଏକା ନୁହନ୍ତି। କୁହନ୍ତୁ, ସହାୟା ସାହାଯ୍ୟ କରିବ।",
};

export const translations: Record<LanguageKey, SahayaCopy> = {
  en: english,
  hi: hindi,
  bn: bengali,
  te: telugu,
  ta: tamil,
  mr: marathi,
  gu: gujarati,
  kn: kannada,
  ml: malayalam,
  pa: punjabi,
  or: odia,
};

export const emergencySms: Record<LanguageKey, { withLocation: (url: string) => string; withoutLocation: string }> = {
  en: { withLocation: (url) => `I need help. My location: ${url}`, withoutLocation: "I need help. My location was not shared." },
  hi: { withLocation: (url) => `मुझे मदद चाहिए। मेरी जगह: ${url}`, withoutLocation: "मुझे मदद चाहिए। मेरी जगह साझा नहीं हुई।" },
  bn: { withLocation: (url) => `আমার সাহায্য দরকার। আমার অবস্থান: ${url}`, withoutLocation: "আমার সাহায্য দরকার। আমার অবস্থান শেয়ার হয়নি।" },
  te: { withLocation: (url) => `నాకు సహాయం కావాలి. నా ప్రదేశం: ${url}`, withoutLocation: "నాకు సహాయం కావాలి. నా ప్రదేశం భాగస్వామ్యం కాలేదు." },
  ta: { withLocation: (url) => `எனக்கு உதவி வேண்டும். என் இருப்பிடம்: ${url}`, withoutLocation: "எனக்கு உதவி வேண்டும். என் இருப்பிடம் பகிரப்படவில்லை." },
  mr: { withLocation: (url) => `मला मदत हवी आहे. माझे ठिकाण: ${url}`, withoutLocation: "मला मदत हवी आहे. माझे ठिकाण शेअर झाले नाही." },
  gu: { withLocation: (url) => `મને મદદ જોઈએ છે. મારું સ્થાન: ${url}`, withoutLocation: "મને મદદ જોઈએ છે. મારું સ્થાન શેર થયું નથી." },
  kn: { withLocation: (url) => `ನನಗೆ ಸಹಾಯ ಬೇಕು. ನನ್ನ ಸ್ಥಳ: ${url}`, withoutLocation: "ನನಗೆ ಸಹಾಯ ಬೇಕು. ನನ್ನ ಸ್ಥಳ ಹಂಚಿಕೆಯಾಗಿಲ್ಲ." },
  ml: { withLocation: (url) => `എനിക്ക് സഹായം വേണം. എന്റെ സ്ഥലം: ${url}`, withoutLocation: "എനിക്ക് സഹായം വേണം. എന്റെ സ്ഥലം പങ്കിട്ടിട്ടില്ല." },
  pa: { withLocation: (url) => `ਮੈਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ। ਮੇਰੀ ਥਾਂ: ${url}`, withoutLocation: "ਮੈਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ। ਮੇਰੀ ਥਾਂ ਸਾਂਝੀ ਨਹੀਂ ਹੋਈ।" },
  or: { withLocation: (url) => `ମୋତେ ସାହାଯ୍ୟ ଦରକାର। ମୋ ସ୍ଥାନ: ${url}`, withoutLocation: "ମୋତେ ସାହାଯ୍ୟ ଦରକାର। ମୋ ସ୍ଥାନ ସେୟାର ହୋଇନାହିଁ।" },
};

export function getLanguageOption(key: LanguageKey) {
  return languageOptions.find((language) => language.key === key) ?? languageOptions[0];
}