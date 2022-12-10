


let davvk = "https://api.sheety.co/052409451a655b617d5a507bcc00ec4a/davVk/";
let skv = "https://api.sheety.co/052409451a655b617d5a507bcc00ec4a/skvZeenat/";
let baseUrl = "https://api.sheety.co/052409451a655b617d5a507bcc00ec4a/";

let consentText = "HumanQind आपका स्वागत करती है। अगले प्रश्न छात्रों के माता पिता या अभिभावकों के लिए हैं ये प्रश्नावली छात्रों के बारे में कुछ डाटा एकत्रित करेगी जैसे की, उनकी उम्र, लिंग और घर का पता। हम छात्रों का नाम या फिर ऐसी कोई जानकारी जिस से उनकी पहचान का पता लग पाए नहीं एकत्रित करती है। ये सारा डाटा HumanQind Design Foundation एकत्रित कर सुरक्षरित रूप से स्टोर करती है, और इसका इस्तेमाल सिर्फ &quot;सेफ स्कूल जोन&quot; प्रोजेक्ट के शोध और डाटा एनालिसिस के लिए किया जायेग। इस डेटा का उपयोग किसी व्यावसायिक उद्देश्य के लिए नहीं किया जाएगा । आपसे अनुरोध है की आप ये डाटा संगृहीत करने की अपनी तरफ से अनुमति दे। <br><br>मैं (छात्र का माता या पिता या अभिभावक) इस डाटा को एकत्रित करने की सहमति देता हूँ । <br> <br> The following questionnaire will collect data of the students that include their age, gender and home address. No names or any other data to reveal the identity of the student will be collected. This data collected will be securely stored by HumanQind Design Foundation and will only be used for research and data analysis as part of the Safe School Zone Project. This data will not be used for any commercial purposes. Please give your consent for the collection of the data.";

//FORMS BELOW
let prefill = "?usp=pp_url&entry.27314893=";
let studForms = {
    "davvk":"https://docs.google.com/forms/d/e/1FAIpQLSexhLfgPWdK8kJDV8S6whdHZ5cbqOkns4vrtpuqoFL9-Q0fJg/viewform",

    "skvZeenat": "https://docs.google.com/forms/d/e/1FAIpQLSeKdFL5cNpmUTTsdVf7xGSvpRyGu3S6zj806kaZzg1N3vv4mA/viewform",
    
    "gbsssGok":"https://docs.google.com/forms/d/e/1FAIpQLSc2DX6kZ75kZJeWn0g_8BH1ZHOqzy5He1_eveeLdZeC5_UnBw/viewform",
    
    "jkps":"https://docs.google.com/forms/d/e/1FAIpQLSeNW1Hre0PObDvyD2LIBVk1lILGsqzakXWkAILO4IfhS7qhig/viewform",
    
    "sachdeva":"https://docs.google.com/forms/d/e/1FAIpQLScJfOD4FMt0u8AwBRwzde7ZybhF_ce2yObosZIpW13gEC6QSQ/viewform",
    
    "gbsssVish":"https://docs.google.com/forms/d/e/1FAIpQLSc0j_G5BeuaWk8BAWZO86YB2Cnv233V8dbl4ZDAtcwkwQu_2g/viewform",
    
    "gbsssShak":"https://docs.google.com/forms/d/e/1FAIpQLSeKhVfFBbtX9moggMTlaQOkrKKwEUvw6_Un59N6MRzZszuD2g/viewform",
    
    "skvHari":"https://docs.google.com/forms/d/e/1FAIpQLSf_coqFOS1HwsXxFoW2yCfhhBaJKrxWhWpjuGO_J3RS0mzcbA/viewform",
    
    "skvMundka":"https://docs.google.com/forms/d/e/1FAIpQLScVDFMIIW2Ztu3PzA5R5QQbCcoNt72jOWjpyCadSiL0pMAcRQ/viewform",
    
    "skvNaz":"https://docs.google.com/forms/d/e/1FAIpQLSeB5OvsTWHKjgliVsViD4QdlZIcb6W0vcdTHMN0XMDJRgVFZA/viewform",
    
    "skvGhi":"https://docs.google.com/forms/d/e/1FAIpQLSc6HZOw-53BDL3TwRPu5k3thozS81Kcs_TmUok3-a-llt8OQQ/viewform"
};


let teachForms = {
    "davvk":"https://docs.google.com/forms/d/e/1FAIpQLSemDlj_Iwvzj8O7QQD9dJYTkZdgA2hCNp1efV2yBaZ0zhBdlQ/viewform",

    "skvZeenat": "https://docs.google.com/forms/d/e/1FAIpQLSegGi9q7ChArDzrAmxMdMbGcH6T_WT-fx85sxAyOJHz3O1gyA/viewform",
    
    "gbsssGok":"https://docs.google.com/forms/d/e/1FAIpQLSeetkp-fBDSL2a0AWBphQeZ5aArnCQ6VtmXQQjISaJ35ifExg/viewform",
    
    "jkps":"https://docs.google.com/forms/d/e/1FAIpQLSe71h4VsLbvZhmd7itr1ekG6kS9D1D0RKRJOhkoVA9L4UCEVQ/viewform",
    
    "sachdeva":"https://docs.google.com/forms/d/e/1FAIpQLSfjOVdeq2DgGG6fB0QBRF5ewemvOjHZc3CxEN-mTOGcJjh9Cw/viewform",
    
    "gbsssVish":"https://docs.google.com/forms/d/e/1FAIpQLScLaMehOVukhzhG69HK_v5VMQWCLVvbKdrZpuIjiUYzKlenXQ/viewform",
    
    "gbsssShak":"https://docs.google.com/forms/d/e/1FAIpQLSdR-vBaYbMfFhz7mDYvSK1XS_nDmQuj88Efv8epPM8OEFDBZA/viewform",
    
    "skvHari":"https://docs.google.com/forms/d/e/1FAIpQLSeiw0KiZ5EOpO8g2HtGwT8ESoD6yIAhyJIKyxO3ivpWkeuL2Q/viewform",
    
    "skvMundka":"https://docs.google.com/forms/d/e/1FAIpQLSc8xdPKBb1uwjN-p7JTw1UJVUBZJrLanfgpWKPcNyzz30krwA/viewform",
    
    "skvNaz":"https://docs.google.com/forms/d/e/1FAIpQLSeEdx7kX_FUnjV9YdmP5akJDDuBtNTUtAmZ4pp8ooEr8w-BKQ/viewform",
    
    "skvGhi":"https://docs.google.com/forms/d/e/1FAIpQLSeijtshAFuNqFq-TRz_7bGkQz5xjcKKMZXP7JP_IYYAsW4jmg/viewform"
};