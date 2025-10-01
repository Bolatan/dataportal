const schools = [
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Aanu Oluwapo Primary School Oyewole (24010005)", "schoolCode": "24010005" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Central Primary School Oniwaya (24010024)", "schoolCode": "24010024" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Ahmad Memorial Moslem Primary School Oke- Kato (24010027)", "schoolCode": "24010027" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajegunle Primary Schoolotubu Agege (24010028)", "schoolCode": "24010028" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Akilo Primary School Ogba (24010029)", "schoolCode": "24010029" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Amosun Nursery &Amp Primary School Amosun (24010042)", "schoolCode": "24010042" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Anwar-Ul-Islam Primary School Agege (24010044)", "schoolCode": "24010044" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Araromi Primary School Agege (24010046)", "schoolCode": "24010046" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Bishop Ajana Primary School Oke-Koto (24010069)", "schoolCode": "24010069" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Communityunity Primary School Idi Mangoro (24010103)", "schoolCode": "24010103" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Dairy Farm Nursery And Primary School Sango Agege (24010110)", "schoolCode": "24010110" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Darocha Primary School Agege (24010111)", "schoolCode": "24010111" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " District Primary School Agege (24010132)", "schoolCode": "24010132" },
    { "lga": " Agege Local Government Area", "ward": "la Dopemu Ward", "schoolName": " Dopemu Primary School Agege (24010142)", "schoolCode": "24010142" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Ibido Primary School Oke-Koto (24010232)", "schoolCode": "24010232" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Ideal Primary School Tabon Tabon (24010235)", "schoolCode": "24010235" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifelodun Primary School Agege (24010237)", "schoolCode": "24010237" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifeoluwa Primary School Agege (24010238)", "schoolCode": "24010238" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Irepodun Primary School Agege (24010248)", "schoolCode": "24010248" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Issa Williams Primary School Agege (24010249)", "schoolCode": "24010249" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Jibril Martins Primary School Agege (24010253)", "schoolCode": "24010253" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Keke Primary School Obemero Remo Keke (24010268)", "schoolCode": "24010268" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Ladoje Primary Schoo Oko Oba (24010277)", "schoolCode": "24010277" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Local Government Primary School Agege (24010285)", "schoolCode": "24010285" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Methodist Primary School Tabon-Tabon (24010300)", "schoolCode": "24010300" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Moses Orimolade Primary School Oke Koto (24010303)", "schoolCode": "24010303" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Oduduwa Primary School Oduduwa (24010308)", "schoolCode": "24010308" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Oke-Koto United Primary School Oke-Koto (24010309)", "schoolCode": "24010309" },
    { "lga": " Agege Local Government Area", "ward": "la Orile Ward (Agege)", "schoolName": " Oko-Oba Primary School Oko-Oba (24010310)", "schoolCode": "24010310" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Okusanya Primary School Tabon-Tabon (24010311)", "schoolCode": "24010311" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Olusanya Primary School Agege (24010317)", "schoolCode": "24010317" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Oore Ofe Primary School Dopema (24010320)", "schoolCode": "24010320" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Orile Agege Primary School Orile Agege (24010324)", "schoolCode": "24010324" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Progressive Primary School Agege (24010341)", "schoolCode": "24010341" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Sacred Cherubim &Amp Seraphim Shillo Primary School Oke-Kato (24010366)", "schoolCode": "24010366" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Saka Tinubu Primary School Orile Agege (24010369)", "schoolCode": "24010369" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Primary School Dopemu (24010370)", "schoolCode": "24010370" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Sanngo Primary School Sanngo Agege (24010374)", "schoolCode": "24010374" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " St Peters Blessed Primary School Oke-Kato (24010391)", "schoolCode": "24010391" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " St Saviours Primary School Oniwaya Agege (24010392)", "schoolCode": "24010392" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School Dopemu (24010396)", "schoolCode": "24010396" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School Iloro (24010397)", "schoolCode": "24010397" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School Oyewole Mulero Agege (24010398)", "schoolCode": "24010398" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " State Primary School Sango (24010399)", "schoolCode": "24010399" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Unity Primary School Mulero (24010425)", "schoolCode": "24010425" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Vocational Centre 2 State Primary School Oyewole (24010435)", "schoolCode": "24010435" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Yewa Primary School Orile (24010439)", "schoolCode": "24010439" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Zion A/C Nursery And Primary School Alagba (24010440)", "schoolCode": "24010440" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Home And Economic Act And Craft Centre Ikota (24010834)", "schoolCode": "24010834" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Vocational Centre 3 Jibril Martins Complex (24010845)", "schoolCode": "24010845" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Anwar Ul Islam Primary School Oniwaya Agege (24010846)", "schoolCode": "24010846" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Vocational Centre 1 (24010868)", "schoolCode": "24010868" },
    { "lga": " Agege Local Government Area", "ward": "la Sango Ward", "schoolName": " Agege Local Government Nursery School (24010869)", "schoolCode": "24010869" },
    { "lga": " Agege Local Government Area", "ward": "Unknown Ward", "schoolName": " Vocational Centre 4 Ac Central Schools Complex Agege (24010984)", "schoolCode": "24010984" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " African Primary School Ajegunle (24020012)", "schoolCode": "24020012" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Aiyetoro Primary School Ajegunle (24020014)", "schoolCode": "24020014" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajegunle Nursery/Primary School Ojo (24020015)", "schoolCode": "24020015" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajegunle Primary School Awodi Ora (24020016)", "schoolCode": "24020016" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeromi Central Primary School Ajeromi (24020017)", "schoolCode": "24020017" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeromi Ifelodun Computer Centre Ebenenzer Complex Awodi Ora (24020018)", "schoolCode": "24020018" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeromi Ifelodun Primary School Ajeromi (24020020)", "schoolCode": "24020020" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeromi Public Primary School Ajegunle (24020021)", "schoolCode": "24020021" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeronmi Nursery And Primary School (24021587)", "schoolCode": "24021587" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajif Centre Mosafejo Amukoko (24020022)", "schoolCode": "24020022" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajif Computer Centre Suru 131 Ojo Rd Ajegunle (24020023)", "schoolCode": "24020023" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajif Mini Resource Centre Araromi (24020024)", "schoolCode": "24020024" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Alaba Primary School Ii Ajegunle (24020037)", "schoolCode": "24020037" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Alakoto Primary School Alakoto (24020039)", "schoolCode": "24020039" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Nursery &Amp Primary School Ayobo (24020710)", "schoolCode": "24020710" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Pimary School Araromi (24020048)", "schoolCode": "24020048" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School I Ajegunle (24020049)", "schoolCode": "24020049" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Ii Aiyetoro (24020050)", "schoolCode": "24020050" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Araromi Primary School Olodi Apapa 2 (24020054)", "schoolCode": "24020054" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Asubiojo Primary School I Orile Iganmu (24020064)", "schoolCode": "24020064" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Asubiojo Primary School Ii Alaba Oro Ajegunle (24020065)", "schoolCode": "24020065" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Awodi Ora Primary School Awodi Ora (24020073)", "schoolCode": "24020073" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayodele Primary School Ajegunle (24020075)", "schoolCode": "24020075" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Cardoso Primary School Ajegunle (24020102)", "schoolCode": "24020102" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ Assembly Primary School Ajegunle (24020111)", "schoolCode": "24020111" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ The King Primary School Ajegunle (24020115)", "schoolCode": "24020115" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebenezer Primary School Awodi Ora (24020181)", "schoolCode": "24020181" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Father Sadiku Memorial Primary School Ajegunle (24020209)", "schoolCode": "24020209" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Goriola Primary School I Ajegunle (24020260)", "schoolCode": "24020260" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Goriola Primary School Ii Ajegunle (24020261)", "schoolCode": "24020261" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre (24020296)", "schoolCode": "24020296" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Alaba Oro (24020297)", "schoolCode": "24020297" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ibafon Nur/ School Olodi Apapa (24021283)", "schoolCode": "24021283" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifelodun Primary School Owodi Ora (24020305)", "schoolCode": "24020305" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ireti Primary School I Ojo (24020312)", "schoolCode": "24020312" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ireti Primary Schoolii Ojo (24020313)", "schoolCode": "24020313" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Jimoh Ojora Primary School I Amukoko (24020320)", "schoolCode": "24020320" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Jimoh Ojora Primary School Ii Amukoko (24020321)", "schoolCode": "24020321" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Kajola Primary School Araromi (24020335)", "schoolCode": "24020335" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " L A Primary School Araromi (24021266)", "schoolCode": "24021266" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " L A Primary School Osho Drive Ajegunle (24020036)", "schoolCode": "24020036" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos State Model Nursery And Primary School Ajegunle (24020347)", "schoolCode": "24020347" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursery/Primary School Amukoko Ib (24020356)", "schoolCode": "24020356" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ajegunle (24020360)", "schoolCode": "24020360" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School I Aiyetoro (24020357)", "schoolCode": "24020357" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School I Amukoko (24020358)", "schoolCode": "24020358" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ii Aiyetoro (24020359)", "schoolCode": "24020359" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Layeni Ajegunle (24020361)", "schoolCode": "24020361" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary Schoolii Amukoko (24020363)", "schoolCode": "24020363" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Nur/Primary School Araromi (24021279)", "schoolCode": "24021279" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Nursery And Primary School Awodi Ora (24020389)", "schoolCode": "24020389" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Nawair Ud Deen Primary School I Aiyetoro Ajegunle (24020390)", "schoolCode": "24020390" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Nawair Ud Deen Primary School Ii Aiyetoro Ajegunle (24020391)", "schoolCode": "24020391" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " New Primary School Araromi (24020392)", "schoolCode": "24020392" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Ogunlade Primary School Ii Alaba (24020401)", "schoolCode": "24020401" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Okorogbo Primary School Okorogbo (24020408)", "schoolCode": "24020408" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Oladipo Primary School I Oke Oja (24020409)", "schoolCode": "24020409" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Oladipo Primary School Ii Oke Oja (24020410)", "schoolCode": "24020410" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Olaniyonu Primary School Alaba (24020412)", "schoolCode": "24020412" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Olodi Apapa Primary School Olodi Apapa (24020413)", "schoolCode": "24020413" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Oluwa Primary School Araromi I (24020420)", "schoolCode": "24020420" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Oremeji Primary School I Olodi Apapa (24020425)", "schoolCode": "24020425" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Oremeji Primary School Ii Olodi Apapa (24020426)", "schoolCode": "24020426" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Orodu Primary School Ajegunle Orodu (24020427)", "schoolCode": "24020427" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Reservation Primary School Olodi Apapa (24020461)", "schoolCode": "24020461" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Sari Iganmu Primary School I Oke Oja (24020490)", "schoolCode": "24020490" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Sari Iganmu Primary School Ii Oke Oja (24020491)", "schoolCode": "24020491" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Sea Breeze Primary School Olodi Apapa (24020494)", "schoolCode": "24020494" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " St John Anglican Primary School Araromi Apapa (24020510)", "schoolCode": "24020510" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " St Mary Rcm Primary School Ajegunle (24020512)", "schoolCode": "24020512" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Suru Primary School Ajegunle (24020525)", "schoolCode": "24020525" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Tolu Primary School Olodi Apapa (24020541)", "schoolCode": "24020541" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Unity Primary School Owodi Ora (24020558)", "schoolCode": "24020558" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Wowo Primary School Olodi Apapa (24020571)", "schoolCode": "24020571" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumratul Islamiyyah Primary School Ajegunle (24020585)", "schoolCode": "24020585" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumratul Islamiyyah Primary School Araromi Ii (24020586)", "schoolCode": "24020586" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumratul Islamiyyah Primary School I Alaba (24020583)", "schoolCode": "24020583" },
    { "lga": " Ajeromi/Ifelodun Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumratul Islamiyyah Primary School Ii Alaba (24020584)", "schoolCode": "24020584" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Aboru Nursery &Amp Primary School Aboru (24030011)", "schoolCode": "24030011" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Nursery/ Primary School Ii Meiran (24030013)", "schoolCode": "24030013" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Primary Schoo I Alagbado (24030014)", "schoolCode": "24030014" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Primary School Akowonjo (24030015)", "schoolCode": "24030015" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Primary School Meiran Ajasa (24030017)", "schoolCode": "24030017" },
    { "lga": " Alimosho Local Government Area", "ward": "la Ipaja Ward", "schoolName": " African Church Primary School Mosan Ipaja (24030029)", "schoolCode": "24030029" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbeda Ward", "schoolName": " Egbeda Nursery And Primary School (24030042)", "schoolCode": "24030042" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Akowonjo Nursery/Primary Schoolakowonjo Alimosho (24030057)", "schoolCode": "24030057" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbeda Ward", "schoolName": " Alimosho Computer Centre (24030060)", "schoolCode": "24030060" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Alaguntan Nursery/Primary School Alimosho (24030061)", "schoolCode": "24030061" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbeda Ward", "schoolName": " Alimosho Teachers Resource Centre (24030062)", "schoolCode": "24030062" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Alimosho Nursery/Primary School Alimosho (24030091)", "schoolCode": "24030091" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Nursery &Amp Primary School Ayobo (24030092)", "schoolCode": "24030092" },
    { "lga": " Alimosho Local Government Area", "ward": "la Akesan-Obadore Ward", "schoolName": " Anglican Nursery/Primary School Akesan (24030099)", "schoolCode": "24030099" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Nursery/Primary School Abule Egba (24030104)", "schoolCode": "24030104" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Ategbo Nursery And Primary School Ikotun (24030116)", "schoolCode": "24030116" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egan Ward", "schoolName": " Community Nursery &Amp Primary School Ii Egan (24030342)", "schoolCode": "24030342" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School Ii Ikotun 2 (24030343)", "schoolCode": "24030343" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School Ilapo (24030344)", "schoolCode": "24030344" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School Ipaja (24030345)", "schoolCode": "24030345" },
    { "lga": " Alimosho Local Government Area", "ward": "la Unity Estate Ward", "schoolName": " Community Nursery And Primary School Ishefun1-3 (24030347)", "schoolCode": "24030347" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School Meiran (24030350)", "schoolCode": "24030350" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School Surulere Alagbado (24030351)", "schoolCode": "24030351" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egan Ward", "schoolName": " Community Nursery&Ampprimary School I Egan (24030352)", "schoolCode": "24030352" },
    { "lga": " Alimosho Local Government Area", "ward": "la Alagbado Ward", "schoolName": " Community Nursery/Primary School Amikanle 2 (24030353)", "schoolCode": "24030353" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery/Primary School Oke Oko Ipaja (24030354)", "schoolCode": "24030354" },
    { "lga": " Alimosho Local Government Area", "ward": "la Isheri Oshun Ward", "schoolName": " Community Primary School I Ijegun (24030355)", "schoolCode": "24030355" },
    { "lga": " Alimosho Local Government Area", "ward": "la Isheri Oshun Ward", "schoolName": " Community Primary School Ii Ijegun (24030356)", "schoolCode": "24030356" },
    { "lga": " Alimosho Local Government Area", "ward": "la Unity Estate Ward", "schoolName": " Community Primary School Isheri Olofin (24030358)", "schoolCode": "24030358" },
    { "lga": " Alimosho Local Government Area", "ward": "la Okeodo Ward", "schoolName": " Community Primary School Oke-Odo Alimosho (24030359)", "schoolCode": "24030359" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Abule Egba (24030360)", "schoolCode": "24030360" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Sasa (24030362)", "schoolCode": "24030362" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Center (24030364)", "schoolCode": "24030364" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebenezer African Church Nursery And Primary School Okunola Egbeda (24030602)", "schoolCode": "24030602" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Abesan Nursary And Primary School Abesan Ipaja (24030664)", "schoolCode": "24030664" },
    { "lga": " Alimosho Local Government Area", "ward": "la Okeodo Ward", "schoolName": " Home Economic Center Oke Odo (24031040)", "schoolCode": "24031040" },
    { "lga": " Alimosho Local Government Area", "ward": "la Oki Ward", "schoolName": " Home Economics Centre (24031041)", "schoolCode": "24031041" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Housing Estate Nursery And Primary School Ipaja (24031056)", "schoolCode": "24031056" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifesowapo Nursery &Amp Primary School Aboru (24031063)", "schoolCode": "24031063" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijegun Junior High Schoolool Ii Ijegun (24031069)", "schoolCode": "24031069" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Nursery &Amp Primary School Isheri Osun (24031281)", "schoolCode": "24031281" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Nursery And Primary School I Alagbado (24031282)", "schoolCode": "24031282" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Nursery And Primary School Ii Agbado (24031284)", "schoolCode": "24031284" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egan Ward", "schoolName": " Local Government Nursery And Primary School Ii Egan (24031285)", "schoolCode": "24031285" },
    { "lga": " Alimosho Local Government Area", "ward": "la Igando Ward", "schoolName": " Local Government Nursery And Primary School Ii Igando (24031286)", "schoolCode": "24031286" },
    { "lga": " Alimosho Local Government Area", "ward": "la Unity Estate Ward", "schoolName": " Local Government Nursery And Primary School Egbe (24031287)", "schoolCode": "24031287" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egan Ward", "schoolName": " Local Government Primary School I Egan (24031289)", "schoolCode": "24031289" },
    { "lga": " Alimosho Local Government Area", "ward": "la Isheri Oshun Ward", "schoolName": " Local Government Primary School I Ijegun (24031290)", "schoolCode": "24031290" },
    { "lga": " Alimosho Local Government Area", "ward": "la Isheri Oshun Ward", "schoolName": " Local Government Primary School Ii Ijegun (24031291)", "schoolCode": "24031291" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Oke Ishagun/Ikola (24031292)", "schoolCode": "24031292" },
    { "lga": " Alimosho Local Government Area", "ward": "la Igando Ward", "schoolName": " Local Gvernment Primary School I Igando (24031293)", "schoolCode": "24031293" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Nurudeen Adewale Nursery &Amp Primary School Surulere Alagbado (24031484)", "schoolCode": "24031484" },
    { "lga": " Alimosho Local Government Area", "ward": "la Abaranje Okerube Ward", "schoolName": " Okerube Nursery And Primary School Ii Abaranje (24031496)", "schoolCode": "24031496" },
    { "lga": " Alimosho Local Government Area", "ward": "la Oki Ward", "schoolName": " Oki Nursery/Primary School And Inclusive Units Alimosho (24031497)", "schoolCode": "24031497" },
    { "lga": " Alimosho Local Government Area", "ward": "la Akesan-Obadore Ward", "schoolName": " Olofin Nursery/Primary School Akesan (24031506)", "schoolCode": "24031506" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Olukotun Nursery And Primary School Ikotun (24031514)", "schoolCode": "24031514" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbe-Agodo Ward", "schoolName": " Oore-Ofe Nursery And Primary School Egbe (24031528)", "schoolCode": "24031528" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Rauf Aregbesola Primary School Abati (24031661)", "schoolCode": "24031661" },
    { "lga": " Alimosho Local Government Area", "ward": "la Oki Ward", "schoolName": " Salvation-Army Nursery And Primary School I Ayobo-Iyaba (24031769)", "schoolCode": "24031769" },
    { "lga": " Alimosho Local Government Area", "ward": "la Ayobo Ward", "schoolName": " Salvation-Army Nursery And Primary School Ii Ayobo Ipaja (24031770)", "schoolCode": "24031770" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Sasa Nursery &Amp Primary School Alimosho (24031789)", "schoolCode": "24031789" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " St Georges Una Primary School Ipaja (24031871)", "schoolCode": "24031871" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " St Andrews Anglican Nursery &Amp Primary School Ipaja (24031882)", "schoolCode": "24031882" },
    { "lga": " Alimosho Local Government Area", "ward": "la Okeodo Ward", "schoolName": " Temidire Nursery And Primary School Oke-Odo (24031969)", "schoolCode": "24031969" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Egbeda (24032179)", "schoolCode": "24032179" },
    { "lga": " Alimosho Local Government Area", "ward": "la Akowonjo Ward", "schoolName": " Abati Primary School Abati (24032190)", "schoolCode": "24032190" },
    { "lga": " Alimosho Local Government Area", "ward": "la Bada Ward", "schoolName": " Iroro Primary Shcool (24038217)", "schoolCode": "24038217" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbe-Agodo Ward", "schoolName": " Unity Nursery And Primary School Egbe (24038220)", "schoolCode": "24038220" },
    { "lga": " Alimosho Local Government Area", "ward": "la Egbe-Agodo Ward", "schoolName": " Community Nursery And Primary School Egbe (24038222)", "schoolCode": "24038222" },
    { "lga": " Alimosho Local Government Area", "ward": "la Ayobo Ward", "schoolName": " Community Primary Schoolishefun (24038223)", "schoolCode": "24038223" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Vocational Centre Abule Egba (24038235)", "schoolCode": "24038235" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Nursery And Primary School (24038238)", "schoolCode": "24038238" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Model Nursery /Primary School Ii Alagbado (24038241)", "schoolCode": "24038241" },
    { "lga": " Alimosho Local Government Area", "ward": "la Okeodo Ward", "schoolName": " Aanuolwapo (24038254)", "schoolCode": "24038254" },
    { "lga": " Alimosho Local Government Area", "ward": "la Oki Ward", "schoolName": " Alimosho Primary School Iyana-Ipaja (24038258)", "schoolCode": "24038258" },
    { "lga": " Alimosho Local Government Area", "ward": "la Ikotun Ward", "schoolName": " Local Government Primary School Ii Ikotun (24038294)", "schoolCode": "24038294" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Vocational Center Ikotun (24038406)", "schoolCode": "24038406" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary School (24038422)", "schoolCode": "24038422" },
    { "lga": " Alimosho Local Government Area", "ward": "la Ajasa Amikanle Ward", "schoolName": " African Church Nursery And Primary School (24038429)", "schoolCode": "24038429" },
    { "lga": " Alimosho Local Government Area", "ward": "la Akesan-Obadore Ward", "schoolName": " Community Primary School (24038521)", "schoolCode": "24038521" },
    { "lga": " Alimosho Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Igbogila Ipaja (24038676)", "schoolCode": "24038676" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 2Nd Avenue Primary School Festac (24040001)", "schoolCode": "24040001" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 3Rd Avenue Nursery And Primary School Fectac (24040002)", "schoolCode": "24040002" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 4Th Avenue Primary School Festac (24040003)", "schoolCode": "24040003" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 512 Rd Primary School Fectac (24040004)", "schoolCode": "24040004" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 5Th Avenue Primary School Fectac (24040006)", "schoolCode": "24040006" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " 7Th Avenue Primary School Festa (24040007)", "schoolCode": "24040007" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Amuwo Odofin Primary School Amuwo Adofin (24040028)", "schoolCode": "24040028" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Abule Ado (24040035)", "schoolCode": "24040035" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Art And Craft Centre Festac (24040039)", "schoolCode": "24040039" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Bishopkoji Community Nursery And Primary School (24040057)", "schoolCode": "24040057" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Central Nursery And Primary School Kirikiri (24040074)", "schoolCode": "24040074" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Central Primary School Festac (24040075)", "schoolCode": "24040075" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Cherubim &Amp Seraphim Nursery And Primary School (24040082)", "schoolCode": "24040082" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Festac Extention (24040099)", "schoolCode": "24040099" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Vocational Centre Festac (24040100)", "schoolCode": "24040100" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Festac (24040101)", "schoolCode": "24040101" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Festac Primary School Amuwo Festac (24040156)", "schoolCode": "24040156" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre (24040223)", "schoolCode": "24040223" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Navy Town (24040512)", "schoolCode": "24040512" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ideal Primary School Festac 3 (24040227)", "schoolCode": "24040227" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijegun Egba Nursery And Primary School I Ijegun Agba (24040230)", "schoolCode": "24040230" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijegun Egba Nursery And Primary School Ii Ijekun Egba Satelite (24040231)", "schoolCode": "24040231" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Itun Agan Community Primary School Itun Agan Island (24040238)", "schoolCode": "24040238" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Kuje Nursery And Primary School Amuwo Odfin (24040274)", "schoolCode": "24040274" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Lasa United Primary School Iibeshe Town Riverine (24040278)", "schoolCode": "24040278" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nur &Amp Primary School I Amowu (24040289)", "schoolCode": "24040289" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursery And Primary School Ibeshe Sea Beach (24040290)", "schoolCode": "24040290" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursery And Primary School Ilashe Imoore (24040291)", "schoolCode": "24040291" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursery And Primary School Sagbokoji (24040292)", "schoolCode": "24040292" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School I Ibasa Revirine (24040293)", "schoolCode": "24040293" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Igbologun Village (24040294)", "schoolCode": "24040294" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ii Kirikiri Town (24040297)", "schoolCode": "24040297" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Iyagbe Odan (Riverine) (24040296)", "schoolCode": "24040296" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Tomaro Ilado Riverine (24040298)", "schoolCode": "24040298" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resource Centre Navy Town (24040513)", "schoolCode": "24040513" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Navy Town Nursery &Amp Primary School Ii Amuwo (24040321)", "schoolCode": "24040321" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Navy Town Primary School 1 Amuwo Odofin (24040322)", "schoolCode": "24040322" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " New Town Primary School Festac (24040329)", "schoolCode": "24040329" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Olumole Primary School Oluti Agboju (24040339)", "schoolCode": "24040339" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Oyewole Nursery &Amp Primary School I Kuje Mazamaza (24040342)", "schoolCode": "24040342" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Oyewole Primary School Ii Amuwo Kuje/Maza Maza (24040343)", "schoolCode": "24040343" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Progress Nursery And Primary (24040361)", "schoolCode": "24040361" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Nursery And Primary School (24040391)", "schoolCode": "24040391" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Satellite Town Nur &Amp  School 1 (24040397)", "schoolCode": "24040397" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Satellite Town Nur&Amp  School 2 (24040398)", "schoolCode": "24040398" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Teachers Resourse Centre (24040431)", "schoolCode": "24040431" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Unity Nursery And Primary School Mile 2 (24040462)", "schoolCode": "24040462" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Universal Nursery/Primary Education Festac Town (24040463)", "schoolCode": "24040463" },
    { "lga": " Amuwo Odofin Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumuratul Islamiya (24040477)", "schoolCode": "24040477" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Apapa Primary School Apapa (24050026)", "schoolCode": "24050026" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Arts &Amp Craft Marine Beach (24050382)", "schoolCode": "24050382" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Badia Nursery And Primary School (24050366)", "schoolCode": "24050366" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Marine Bridge (24050390)", "schoolCode": "24050390" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ire Akari Primary School Sari Iganmu (24050117)", "schoolCode": "24050117" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " Nanti Communityunity Primary School Nanti Village Apapa (24050146)", "schoolCode": "24050146" },
    { "lga": " Apapa Local Government Area", "ward": "Unknown Ward", "schoolName": " St Theresas Catholic Nursery And Primary School Apapa (24050188)", "schoolCode": "24050188" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " David Savage Memorial Primary School Sari-Iganmu Apapa (24050061)", "schoolCode": "24050061" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Early Child Care Centre (24050072)", "schoolCode": "24050072" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Home Economics Center Sari (24050377)", "schoolCode": "24050377" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Ire-Akari Primary School Ii Sari-Iganmu Apapa (24050116)", "schoolCode": "24050116" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Irepodun Primary School I Sari Iganmu (24050118)", "schoolCode": "24050118" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Irepodun Primary School Ii Sari-Iganmu Apapa (24050119)", "schoolCode": "24050119" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Metropolitan Primary School Lapapa (24050140)", "schoolCode": "24050140" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Orile Primary School Apapa (24050152)", "schoolCode": "24050152" },
    { "lga": " Apapa Local Government Area", "ward": "la Alafia (Apapa) Ward", "schoolName": " Sari Iganmu Primary School Sari-Iganmu (24050174)", "schoolCode": "24050174" },
    { "lga": " Apapa Local Government Area", "ward": "la Apapa Ward", "schoolName": " Arakan Barracks Primary School Apapa (24050027)", "schoolCode": "24050027" },
    { "lga": " Apapa Local Government Area", "ward": "la Apapa Ward", "schoolName": " Ladilak Primary School 2 Apapa (24050132)", "schoolCode": "24050132" },
    { "lga": " Apapa Local Government Area", "ward": "la Apapa Ward", "schoolName": " Methodist Primary School Apapa (24050139)", "schoolCode": "24050139" },
    { "lga": " Apapa Local Government Area", "ward": "la Apapa Ward", "schoolName": " United Christian Primary School Apapa (24050214)", "schoolCode": "24050214" },
    { "lga": " Apapa Local Government Area", "ward": "la Badia Ward", "schoolName": " Olojonwon Demonstration Nursery And Primary School (24050367)", "schoolCode": "24050367" },
    { "lga": " Apapa Local Government Area", "ward": "la Badia Ward", "schoolName": " Olojowon Demonstration School Oke-Oja Badia Apapa (24050148)", "schoolCode": "24050148" },
    { "lga": " Apapa Local Government Area", "ward": "la Gaskiya Ward", "schoolName": " Badia Primary School Badia Ireti-Owseni S (24050038)", "schoolCode": "24050038" },
    { "lga": " Apapa Local Government Area", "ward": "la Gaskiya Ward", "schoolName": " Ireti Nursery And Primary School (24050365)", "schoolCode": "24050365" },
    { "lga": " Apapa Local Government Area", "ward": "la Ijora Ward", "schoolName": " Ijora Primary School Ijora-Oleye (24050113)", "schoolCode": "24050113" },
    { "lga": " Apapa Local Government Area", "ward": "la Marine Beach Ward", "schoolName": " Anglican Primary School Apapa (24050021)", "schoolCode": "24050021" },
    { "lga": " Apapa Local Government Area", "ward": "la Marine Beach Ward", "schoolName": " Army Children Primary School Apapa (24050032)", "schoolCode": "24050032" },
    { "lga": " Apapa Local Government Area", "ward": "la Marine Beach Ward", "schoolName": " Computer Centre Marine Beach (24050379)", "schoolCode": "24050379" },
    { "lga": " Apapa Local Government Area", "ward": "la Oduduwa Ward", "schoolName": " Baptist Primary School Agbebi Apapa (24050040)", "schoolCode": "24050040" },
    { "lga": " Apapa Local Government Area", "ward": "la Oduduwa Ward", "schoolName": " Mini Resources Centre Apapa (24050370)", "schoolCode": "24050370" },
    { "lga": " Apapa Local Government Area", "ward": "la Oduduwa Ward", "schoolName": " State Primary School End Point Apapa (24050194)", "schoolCode": "24050194" },
    { "lga": " Apapa Local Government Area", "ward": "la Owoseni Ward", "schoolName": " Ajeromi Primary School Badia Ijora (24050006)", "schoolCode": "24050006" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Aradagun Badagry (24060050)", "schoolCode": "24060050" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Gbanko (24060051)", "schoolCode": "24060051" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Ilado (24060052)", "schoolCode": "24060052" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Ilogbo Eremi (24060053)", "schoolCode": "24060053" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Imeke Iworo Ajido (24060054)", "schoolCode": "24060054" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Iworo Ajido Badagry (24060055)", "schoolCode": "24060055" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Toga Zanmu Badagry (24060056)", "schoolCode": "24060056" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary 2 (24061441)", "schoolCode": "24061441" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary 3 (24061439)", "schoolCode": "24061439" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Araromi Ale (24060059)", "schoolCode": "24060059" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Esepe Badagry (24060164)", "schoolCode": "24060164" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Epeme Primary School Epe Badagry (24060233)", "schoolCode": "24060233" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbenopo Primary School Ajara Topa Badagry (24060289)", "schoolCode": "24060289" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbenopo Primary School Ii Gbenopo (24060290)", "schoolCode": "24060290" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursary And Primary School Ipara (24060486)", "schoolCode": "24060486" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ajara Iluda (24060488)", "schoolCode": "24060488" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Akarakumo Village (24060489)", "schoolCode": "24060489" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Badagry Boekoh (24060490)", "schoolCode": "24060490" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ebute Gbonuajido Badagry (24060493)", "schoolCode": "24060493" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ii Ajara (24060492)", "schoolCode": "24060492" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Keta West Badagry (24060495)", "schoolCode": "24060495" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Okogbo Moba (24060028)", "schoolCode": "24060028" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Topo/Idale (24060498)", "schoolCode": "24060498" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Nursery And Primary School (24060540)", "schoolCode": "24060540" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Ashipanu Seme Badagry (24060541)", "schoolCode": "24060541" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Badagry (24060542)", "schoolCode": "24060542" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Enuko (24060543)", "schoolCode": "24060543" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Kweme (24060545)", "schoolCode": "24060545" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Tohon (24060547)", "schoolCode": "24060547" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Mission Communityuniyy Primary School (24060566)", "schoolCode": "24060566" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Primary School Badagry (24060567)", "schoolCode": "24060567" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Our Lady Of Apostles Primary School Badagry (24060597)", "schoolCode": "24060597" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Our Lady Of Fatima Primary School Ganyingbo (24060599)", "schoolCode": "24060599" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Anlo Boglo (24060665)", "schoolCode": "24060665" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Ikotun (24060667)", "schoolCode": "24060667" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Ilogbo Eremi (24060668)", "schoolCode": "24060668" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " St Leos Catholic Primary School Ikoga (24060708)", "schoolCode": "24060708" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " St Patrick (Rcm) Primary School Iragbo/Iragon (24060713)", "schoolCode": "24060713" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peters Catholic Primary School Agonrin (24060714)", "schoolCode": "24060714" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " St Thomass Primary School (24060717)", "schoolCode": "24060717" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Unity Primary School Ajido (24060786)", "schoolCode": "24060786" },
    { "lga": " Badagry Local Government Area", "ward": "Unknown Ward", "schoolName": " Zunve Primary School Zunve (24060828)", "schoolCode": "24060828" },
    { "lga": " Badagry Local Government Area", "ward": "la Ajara Vetho Ward", "schoolName": " Army Children Primary School Ibereko Badagry (24060065)", "schoolCode": "24060065" },
    { "lga": " Badagry Local Government Area", "ward": "la Ajara Vetho Ward", "schoolName": " Local Authority Primary School Ibereko (24060491)", "schoolCode": "24060491" },
    { "lga": " Badagry Local Government Area", "ward": "la Apa Ward", "schoolName": " Local Authority Primary School Owode Apa (24060497)", "schoolCode": "24060497" },
    { "lga": " Badagry Local Government Area", "ward": "la Araromi Ale Ward", "schoolName": " Morogbo Primary School Morogbo (24060562)", "schoolCode": "24060562" },
    { "lga": " Badagry Local Government Area", "ward": "la Araromi Ale Ward", "schoolName": " Salvation Army Primary School Ibiye (24060666)", "schoolCode": "24060666" },
    { "lga": " Badagry Local Government Area", "ward": "la Gbethronme Ward", "schoolName": " Methodist Primary School Sawa (24060546)", "schoolCode": "24060546" },
    { "lga": " Badagry Local Government Area", "ward": "la Isalu-Iyafin Ward", "schoolName": " Anglican Primary School 1 Igborosun (24060049)", "schoolCode": "24060049" },
    { "lga": " Badagry Local Government Area", "ward": "la Isalu-Iyafin Ward", "schoolName": " Anglician Primary School Ii Igborosun (24060057)", "schoolCode": "24060057" },
    { "lga": " Badagry Local Government Area", "ward": "la Isalu-Iyafin Ward", "schoolName": " Methodist Primary School Erekiti (24060544)", "schoolCode": "24060544" },
    { "lga": " Badagry Local Government Area", "ward": "la Iworo Gbankon Ward", "schoolName": " Our Lady Of Apostle Nursery And Primary School Ojogun (24060041)", "schoolCode": "24060041" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Agbowa Baptist Church Nursery And Primary School (24070552)", "schoolCode": "24070552" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Epe (24070018)", "schoolCode": "24070018" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Ibonwon (24070017)", "schoolCode": "24070017" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansarul Deen Primary School Odo Egiri (24070019)", "schoolCode": "24070019" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Baptist Day Primary School Agbowa (24070031)", "schoolCode": "24070031" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre At St Theresas Primary School Compound (24070122)", "schoolCode": "24070122" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Methodist Primary School Compound Agbowa Ikosi (24070126)", "schoolCode": "24070126" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Rcm Primary School Ibonwon (24070124)", "schoolCode": "24070124" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Central Primary School Agbowa Ikosi (24070152)", "schoolCode": "24070152" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Central Primary School Agbowa Ikosi (24070515)", "schoolCode": "24070515" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Abejoye (24070439)", "schoolCode": "24070439" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Abomit Epe (24070535)", "schoolCode": "24070535" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Abomiti (24070154)", "schoolCode": "24070154" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Aboreji (24070155)", "schoolCode": "24070155" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Emina Riverine (24070157)", "schoolCode": "24070157" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ibon Epe (24070158)", "schoolCode": "24070158" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Igbogun Village (24070159)", "schoolCode": "24070159" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Igbooye (24070160)", "schoolCode": "24070160" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Imeki Oke Via Ilamija (24070161)", "schoolCode": "24070161" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Imosan Okun Imosan (24070162)", "schoolCode": "24070162" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ipesu Epe (24070163)", "schoolCode": "24070163" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Isan (24070511)", "schoolCode": "24070511" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Isan Epe (24070028)", "schoolCode": "24070028" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ise Village (24070165)", "schoolCode": "24070165" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ito Omu Epe (24070166)", "schoolCode": "24070166" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ladaba Village (24070167)", "schoolCode": "24070167" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Mayunre Village (24070169)", "schoolCode": "24070169" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Moyopa Village (24070170)", "schoolCode": "24070170" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Obada Village (24070172)", "schoolCode": "24070172" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Oguntedo (24070173)", "schoolCode": "24070173" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Okorisan (24070174)", "schoolCode": "24070174" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Orepete (24070175)", "schoolCode": "24070175" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Oriba (24070176)", "schoolCode": "24070176" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Otta Ikosi (24070177)", "schoolCode": "24070177" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Yegunda (24070178)", "schoolCode": "24070178" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary Schoolikosibeach (24070156)", "schoolCode": "24070156" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Itoikin (24070220)", "schoolCode": "24070220" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Ketu E (24070221)", "schoolCode": "24070221" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Roman Catholic Mission (24070407)", "schoolCode": "24070407" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Roman Catholic Mission Primary Schoolejinrin (24070229)", "schoolCode": "24070229" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Vincent Rcm Primary School Ijih (24070578)", "schoolCode": "24070578" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St James Anglican Primary School Museju/Mutakun (24070243)", "schoolCode": "24070243" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St John Rcm Primary School Odomola Epe Ijebu (24070244)", "schoolCode": "24070244" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Johns Anglican Primary School Oke Oso Oke Oso Village (24070245)", "schoolCode": "24070245" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Joseph Rcm Primary School Ibonwon (24070512)", "schoolCode": "24070512" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peter&#39S Roman Catholic Mission Primary School Eredo (24070253)", "schoolCode": "24070253" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Stephens Rcm Primary School Igbonla (24070254)", "schoolCode": "24070254" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Ajengbede Village (24070280)", "schoolCode": "24070280" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Akodo Ise (24070277)", "schoolCode": "24070277" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Iganke (24070281)", "schoolCode": "24070281" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Imokun (24070283)", "schoolCode": "24070283" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Iraye Oke (24070279)", "schoolCode": "24070279" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Odo Ayandelu (24070284)", "schoolCode": "24070284" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " U P E Primary School Odogbawojo (24070285)", "schoolCode": "24070285" },
    { "lga": " Epe Local Government Area", "ward": "Unknown Ward", "schoolName": " Universal Primary School Ilara (24070286)", "schoolCode": "24070286" },
    { "lga": " Epe Local Government Area", "ward": "la Agbowa Ward", "schoolName": " Methodist Primary School Agbowa-Ikosi (24070187)", "schoolCode": "24070187" },
    { "lga": " Epe Local Government Area", "ward": "la Ejinrin Ward Q1", "schoolName": " Anglican Primary School Sekungba (24070016)", "schoolCode": "24070016" },
    { "lga": " Epe Local Government Area", "ward": "la Ifesowapo Ward", "schoolName": " Anglican Primary School Sala (24070015)", "schoolCode": "24070015" },
    { "lga": " Epe Local Government Area", "ward": "la Ifesowapo Ward", "schoolName": " Rcm Primary School Igbodu (24070219)", "schoolCode": "24070219" },
    { "lga": " Epe Local Government Area", "ward": "la Ifesowapo Ward", "schoolName": " U P E Primary School Igbodu Igbodu Riverine (24070278)", "schoolCode": "24070278" },
    { "lga": " Epe Local Government Area", "ward": "la Noforija Ward", "schoolName": " Rcm Primary School Mojoda (24070222)", "schoolCode": "24070222" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Anglican Primary School Ebute-Afuye (24070014)", "schoolCode": "24070014" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Army Barracks Primary School Oke-Oyinbo Epe (24070021)", "schoolCode": "24070021" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Army Children Primary School Oke-Oyinbo Epe (24070023)", "schoolCode": "24070023" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Art &Amp Craft Centre At Local Govt Primary School Compound Epe (24070024)", "schoolCode": "24070024" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Art And Craft Centre Luyepo Primary School Epe (24070025)", "schoolCode": "24070025" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Christ Church Primary School Epe (24070053)", "schoolCode": "24070053" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Community Primary School 1 Erepoto Epe (24070536)", "schoolCode": "24070536" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Community Primary School 1 Erepoto Epe (24070564)", "schoolCode": "24070564" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Community Primary School Erepoto Ii (24070061)", "schoolCode": "24070061" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Computer Centre C/O Local Govt Central Primary School Epe (24070063)", "schoolCode": "24070063" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Computer Centre St Theresas Primary School Compound (24070064)", "schoolCode": "24070064" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Home Economics Centre Pobo Community Primary School Poka (24070123)", "schoolCode": "24070123" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Home Economics Centre Zi Primary School Epe (24070125)", "schoolCode": "24070125" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Local Government Central Primary School Epe (24070153)", "schoolCode": "24070153" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Local Government Primary School Noforija (24070171)", "schoolCode": "24070171" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Lupetoro Primary School Epe (24070181)", "schoolCode": "24070181" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Luyepo Primary School Epe (24070182)", "schoolCode": "24070182" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Mini Resource Centre Lgea Epe (24070190)", "schoolCode": "24070190" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Solomon Memorial Primary School Epe (24070240)", "schoolCode": "24070240" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " St Micheal Anglican Primary School Ii Popo Oba Lagbade (24070249)", "schoolCode": "24070249" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " St Micheal&39S Anglican Primary School Popo-Oba Epe (24070250)", "schoolCode": "24070250" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " St Paul&39S Anglican Primary School Igbooye (24070252)", "schoolCode": "24070252" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " St Theresas Rcm Primary School Oke Oyinbo (24070255)", "schoolCode": "24070255" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Zumratul Islamimiyyat Primary School Ii Epe (24070291)", "schoolCode": "24070291" },
    { "lga": " Epe Local Government Area", "ward": "la Odomola Ward M1", "schoolName": " Zumratul Islamiyyah Primary School Epe (24070292)", "schoolCode": "24070292" },
    { "lga": " Epe Local Government Area", "ward": "la Odoragunsin Ward", "schoolName": " Government Demonstration Primary School Lacoped Noforija (24070116)", "schoolCode": "24070116" },
    { "lga": " Epe Local Government Area", "ward": "la Odoragunsin Ward", "schoolName": " Pobo Primary School Poka (24070214)", "schoolCode": "24070214" },
    { "lga": " Epe Local Government Area", "ward": "la Owu/Ota Ward", "schoolName": " Anglican Primary School Ajebo (24070013)", "schoolCode": "24070013" },
    { "lga": " Epe Local Government Area", "ward": "la Owu/Ota Ward", "schoolName": " St Angnes R C M Primary School Orugbo (24070242)", "schoolCode": "24070242" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Addo Primary School Addo (24080760)", "schoolCode": "24080760" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajiran Primary School Ajiran (24080006)", "schoolCode": "24080006" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Akinlade Primary School Okun Mopu (24080008)", "schoolCode": "24080008" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Arch Bishop Taylor Memorial Primary School Eti Osa (24080014)", "schoolCode": "24080014" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Dodan Barracks Ikoyi (24080015)", "schoolCode": "24080015" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Eti Osa (24080016)", "schoolCode": "24080016" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Awoyaya Primary School Awoyaya (24080020)", "schoolCode": "24080020" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Badore Primary School Badore (24080022)", "schoolCode": "24080022" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Bonny Camp Primary School Eti Osa (24080029)", "schoolCode": "24080029" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Keffi (24080038)", "schoolCode": "24080038" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Dodan Barracks Primary School Obalende (24080052)", "schoolCode": "24080052" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Epiphany Anglican Primary School Abagbo (24080058)", "schoolCode": "24080058" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Federal Housing Estate Primary School Eti Osa (24080063)", "schoolCode": "24080063" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics And Arts/Craft Centre Keffi (24080085)", "schoolCode": "24080085" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Arts And Craft Centre Olomu Ajah (24080553)", "schoolCode": "24080553" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Hon Kazeem Alimi Memorial Nursery And Primary School (24080554)", "schoolCode": "24080554" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Hope Primary School Ikoyi (24080087)", "schoolCode": "24080087" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikota Computer Centre (24080550)", "schoolCode": "24080550" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikota Primary School Ikota (24080088)", "schoolCode": "24080088" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikoyi Girls Modern Academy Ikoyi (24080089)", "schoolCode": "24080089" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikoyi Primary School Ikoyi (24080090)", "schoolCode": "24080090" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ilasan Primary School Ilesan (24080092)", "schoolCode": "24080092" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ireti Girls Primary School Ireti (24080097)", "schoolCode": "24080097" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ireti Primary School Ireti (24080099)", "schoolCode": "24080099" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Itedo Community Primary School Itedo (24080100)", "schoolCode": "24080100" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Jama Atul Islamiyya Primary School Eti Osa (24080101)", "schoolCode": "24080101" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Jinadu Anglican Primary School Jinadu (24080102)", "schoolCode": "24080102" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Kuramo Computer Centre (24080110)", "schoolCode": "24080110" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Kuramo Primary School Kuramo (24080111)", "schoolCode": "24080111" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos State Model Nursey And Primary School Eti Osa (24080114)", "schoolCode": "24080114" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Langbasa Primary School Langbasa (24080115)", "schoolCode": "24080115" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Maiyegun Community Primary School Maiyegun (24080128)", "schoolCode": "24080128" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resources Centre (24080137)", "schoolCode": "24080137" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Obalende Primary School Obalende (24080140)", "schoolCode": "24080140" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Obalende Primary Schoolijeh (24080138)", "schoolCode": "24080138" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Ogbombo Communityunity Primary School Ogbombo (24080143)", "schoolCode": "24080143" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Okun Ajah Primary School Okun Ajah (24080145)", "schoolCode": "24080145" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Olomu Computer Centre (24080552)", "schoolCode": "24080552" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Olomu Primary School Olomu (24080147)", "schoolCode": "24080147" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Police Children School Ii (24080443)", "schoolCode": "24080443" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Sangotedo Primary School Sangotedo (24080161)", "schoolCode": "24080161" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " St Georges Boys Primary School Eti Osa (24080167)", "schoolCode": "24080167" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " St Georges Girls Primary School Eti Osa (24080168)", "schoolCode": "24080168" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Victoria Island Computer Cenre (24080185)", "schoolCode": "24080185" },
    { "lga": " Eti-Osa Local Government Area", "ward": "Unknown Ward", "schoolName": " Victoria Island Primary School Victoria Island (24080186)", "schoolCode": "24080186" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Akinwunmi Ambode Nursery And Primary School (24090604)", "schoolCode": "24090604" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Anwar Ul Islam Primary School Ibeju Lekki (24090015)", "schoolCode": "24090015" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School (24090609)", "schoolCode": "24090609" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School (24090669)", "schoolCode": "24090669" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Abegede (24090047)", "schoolCode": "24090047" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Abijo (24090048)", "schoolCode": "24090048" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Adeba (24090046)", "schoolCode": "24090046" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ajegbenwa (24090049)", "schoolCode": "24090049" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Eputu (24090050)", "schoolCode": "24090050" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Folu (24090051)", "schoolCode": "24090051" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Iba Oloja (24090052)", "schoolCode": "24090052" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Igbodola (24090053)", "schoolCode": "24090053" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Labora (24090628)", "schoolCode": "24090628" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Lakowe (24090054)", "schoolCode": "24090054" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ogogoro (24090055)", "schoolCode": "24090055" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Okegun Odofin (24090056)", "schoolCode": "24090056" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Otolu (24090057)", "schoolCode": "24090057" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Center Lekki (24090059)", "schoolCode": "24090059" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Fazil Omar Ahmadiya Primary School Idado (24090104)", "schoolCode": "24090104" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Center Ijebu/Lekkilekki (24090139)", "schoolCode": "24090139" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Center Saint Peter Ps (24090648)", "schoolCode": "24090648" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Ibeju Computer Centre Ibeju (24090142)", "schoolCode": "24090142" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Akodo (24090178)", "schoolCode": "24090178" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ilege (24090180)", "schoolCode": "24090180" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Okun Solu (24090182)", "schoolCode": "24090182" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Oriyanrin (24090183)", "schoolCode": "24090183" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resource Center Ibeju (24090201)", "schoolCode": "24090201" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Ayeteju (24090233)", "schoolCode": "24090233" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Bogije (24090234)", "schoolCode": "24090234" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Idata (24090235)", "schoolCode": "24090235" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Iwerekun (24090236)", "schoolCode": "24090236" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Lepia (24090237)", "schoolCode": "24090237" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Okegun (24090238)", "schoolCode": "24090238" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Okunraye (24090239)", "schoolCode": "24090239" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Olomowewe (24090240)", "schoolCode": "24090240" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Rcm Primary School Orimedu (24090241)", "schoolCode": "24090241" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Roman Catholic Mission Central Primary School Lekki (24090251)", "schoolCode": "24090251" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Roman Catholic Mission Primary School Ibeju (24090252)", "schoolCode": "24090252" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " St Davids Anglican Primary School Ibeju Lekki (24090264)", "schoolCode": "24090264" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " St Marks Rcm Primary School Awoyaya (24090265)", "schoolCode": "24090265" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peter&#39S Anglican Primary School Ibeju (24090266)", "schoolCode": "24090266" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " St Vincents Rcm Primary School Idotun (24090267)", "schoolCode": "24090267" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Tsangaya Primaryschool Orofun (24090302)", "schoolCode": "24090302" },
    { "lga": " Ibeju/Lekki Local Government Area", "ward": "Unknown Ward", "schoolName": " Upe Primary School Ibeju Lekki (24090303)", "schoolCode": "24090303" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Computer Center (24101294)", "schoolCode": "24101294" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Primary School Ifako Ijaye (24100010)", "schoolCode": "24100010" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Agbado Ijaiye Primary School Ifako Ijaye (24100014)", "schoolCode": "24100014" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Agbado Ijaye Primary School I Alakashe Ojokoro (24100013)", "schoolCode": "24100013" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " All Saints Primary School Iju Gareje (24100021)", "schoolCode": "24100021" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Art And Craft Centre 1 (24101304)", "schoolCode": "24101304" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Art&Amp Craft Centre 2 (24100034)", "schoolCode": "24100034" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayanleye Memorial Primary School Afako Ijaye (24100041)", "schoolCode": "24100041" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Bishop Oluwole Primary School Afako Ijaye (24100069)", "schoolCode": "24100069" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Coker Mem Primary School Afako Ijaye (24100120)", "schoolCode": "24100120" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Center First African Church Mission Primary School 1 (24101300)", "schoolCode": "24101300" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Center New Oko Oba Primary School (24101302)", "schoolCode": "24101302" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebenezer African Primary School Ll Afako Ijaye (24100198)", "schoolCode": "24100198" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " First African Church Mission Primary School 2 (24101293)", "schoolCode": "24101293" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " First African Church Mission Primary School One (24100248)", "schoolCode": "24100248" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Fred Williams Memorial Primary School Iju Railway Station (24100259)", "schoolCode": "24100259" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbeleyi Primary School I Alakuko (24100271)", "schoolCode": "24100271" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbeleyi Primary School Ii Afako Ijaeyi (24100270)", "schoolCode": "24100270" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Trinity Primary School Egbetedo (24100336)", "schoolCode": "24100336" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre 11 Iju Ifako Ijaiye (24100338)", "schoolCode": "24100338" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Iju Station Primary School I Iju Station (24100355)", "schoolCode": "24100355" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Iju Station Primary School Ii Iju (24100356)", "schoolCode": "24100356" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Karaole Primary School Afako Ijaeyi (24100390)", "schoolCode": "24100390" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " New Oko Oba Primary School New Oko Oba (24100483)", "schoolCode": "24100483" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Ogundimu Primary School Iju (24100492)", "schoolCode": "24100492" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Saviour&#39S Primary Schoool Afako Ajaeyi (24100586)", "schoolCode": "24100586" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " St Kizitos Catholic Primary School 11 Ifako Ajaeyi (24100614)", "schoolCode": "24100614" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Vetland Primary School Oko Oba (24100684)", "schoolCode": "24100684" },
    { "lga": " Ifako/Ijaye Local Government Area", "ward": "Unknown Ward", "schoolName": " Wesley Primary School Oko Oba (24100688)", "schoolCode": "24100688" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Adeniyi Jones Primary School Okora Estate Ikeja (24110005)", "schoolCode": "24110005" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Aiforce Primary School 3 (24110541)", "schoolCode": "24110541" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Air Force Primary School 2 Naf (24110011)", "schoolCode": "24110011" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Air Force Primary School I Naf (24110012)", "schoolCode": "24110012" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Anifowase Primary Schoolikeja (24110017)", "schoolCode": "24110017" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Barracks Primary School Ikeja (24110018)", "schoolCode": "24110018" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Ikeja (24110021)", "schoolCode": "24110021" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Model Primary School Cantonment Ikeja (24110022)", "schoolCode": "24110022" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Bola Memorial Primary School Abule Anigbagbo Ikeja (24110035)", "schoolCode": "24110035" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Brigade Primary School Ikeja (24110037)", "schoolCode": "24110037" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Central Primary School Gra Ikeja (24110043)", "schoolCode": "24110043" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Command Children School Nigerian Army Cantonment Ikeja (24110562)", "schoolCode": "24110562" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Communityunity Primary School Wasimi Ikeja (24110056)", "schoolCode": "24110056" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School Ogba Ikeja (24110080)", "schoolCode": "24110080" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Gra Primary School Maryland Ikeja (24110096)", "schoolCode": "24110096" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikeja Primary School Gra Ikeja (24110116)", "schoolCode": "24110116" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos State Model Nursery And Primary School Ikeja (24110127)", "schoolCode": "24110127" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ikeja (24110135)", "schoolCode": "24110135" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Military Cantonment Primary School Ikeja (24110147)", "schoolCode": "24110147" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Military Primary School Ikeja (24110148)", "schoolCode": "24110148" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Nine Brigade Primary School Ikeja (24110164)", "schoolCode": "24110164" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Ojodu Primary School 3 (24110175)", "schoolCode": "24110175" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Ojodu Primary School Ii Ojodu Ikeja (24110177)", "schoolCode": "24110177" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Oke Ira Primary School Oke Ira Aguda (24110179)", "schoolCode": "24110179" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Olusosun Primary School (24110181)", "schoolCode": "24110181" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Onilekere Primary School Ikeja (24110184)", "schoolCode": "24110184" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Opebi Primary School Ikeja (24110186)", "schoolCode": "24110186" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Sogunle Primary School Ikeja (24110208)", "schoolCode": "24110208" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peters Anglican Nursery And Primary School (24110526)", "schoolCode": "24110526" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School Mongoro Ikeja (24110215)", "schoolCode": "24110215" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Subeb Model Nusery And Primary School Gra Ikeja (24110216)", "schoolCode": "24110216" },
    { "lga": " Ikeja Local Government Area", "ward": "Unknown Ward", "schoolName": " Tokunbo Alli Primary School Ikeja (24110229)", "schoolCode": "24110229" },
    { "lga": " Ikeja Local Government Area", "ward": "la Alausa Ward", "schoolName": " Agidingbi Primary School Ikeja (24110010)", "schoolCode": "24110010" },
    { "lga": " Ikeja Local Government Area", "ward": "la Alausa Ward", "schoolName": " Special Correctional School For Boys (24110524)", "schoolCode": "24110524" },
    { "lga": " Ikeja Local Government Area", "ward": "la Ogba Oluwole Ward", "schoolName": " Ogba Primary School Ogba (24110172)", "schoolCode": "24110172" },
    { "lga": " Ikeja Local Government Area", "ward": "la Ojodu Ward", "schoolName": " Ojodu Primary School I Ojodu Ikeja (24110176)", "schoolCode": "24110176" },
    { "lga": " Ikeja Local Government Area", "ward": "la Ojodu Ward", "schoolName": " Ojodu Primary School Ii (24110520)", "schoolCode": "24110520" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " African Bethel Primary School Ota Ona Ikorodu (24120040)", "schoolCode": "24120040" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Aga Primary School Ikorodu (24120043)", "schoolCode": "24120043" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Agodo Alara Communityunity Primary School Ikorodu (24120045)", "schoolCode": "24120045" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Akanun (24120081)", "schoolCode": "24120081" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Ikorodu (24120083)", "schoolCode": "24120083" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Offin (24120085)", "schoolCode": "24120085" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Losi Onikoko Ikorodu (24120101)", "schoolCode": "24120101" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayangburen Primary School Ikorodu (24120120)", "schoolCode": "24120120" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Mowo Nla (24120229)", "schoolCode": "24120229" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Unity Primary School Odo Nla Ikorodu (24120230)", "schoolCode": "24120230" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Communityunity Primary School Abule Eko (24120226)", "schoolCode": "24120226" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Communityunity Primary School Imota (24120227)", "schoolCode": "24120227" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Center Ikorodu (24122528)", "schoolCode": "24122528" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School Ikorodu (24120362)", "schoolCode": "24120362" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Etunrenren Primary School Ikorodu (24120366)", "schoolCode": "24120366" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Trinity Primary School Ikorodu (24122456)", "schoolCode": "24122456" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Ikorodu (24120556)", "schoolCode": "24120556" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijomu Muslim Primary School Ikorodu (24120564)", "schoolCode": "24120564" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ikorodu (24123254)", "schoolCode": "24123254" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos State Model Nursery And Primary School (24122474)", "schoolCode": "24122474" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Isiu (24120686)", "schoolCode": "24120686" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Ewu Elepe (24120734)", "schoolCode": "24120734" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Ibeshe (24120736)", "schoolCode": "24120736" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Igbogbo (24120737)", "schoolCode": "24120737" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Ikorodu (24120738)", "schoolCode": "24120738" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Oke Eletu (24120740)", "schoolCode": "24120740" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resouce Center (24122482)", "schoolCode": "24122482" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Primary School Ikorodu (24120764)", "schoolCode": "24120764" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Oga Primary School Ikorodu (24120802)", "schoolCode": "24120802" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Agunfoye (24120938)", "schoolCode": "24120938" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Ikorodu (24120939)", "schoolCode": "24120939" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Temidire Primary School Ikorodu (24121022)", "schoolCode": "24121022" },
    { "lga": " Ikorodu Local Government Area", "ward": "Unknown Ward", "schoolName": " Una Primary School Oke Agbo (24121115)", "schoolCode": "24121115" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Abosan", "schoolName": " Ansar-Ud-Deen Primary School Igbogbo (24120088)", "schoolCode": "24120088" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Abosan", "schoolName": " Lajo Communityunity Primary School Ikorodu (24120639)", "schoolCode": "24120639" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Abosan", "schoolName": " Owode Primary Schoolowode (24120821)", "schoolCode": "24120821" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Abosan", "schoolName": " United African Methodist Church Eleja Primary Schools (24122450)", "schoolCode": "24122450" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Agura Ward", "schoolName": " African Bethel Primary School Ikorodu (24120039)", "schoolCode": "24120039" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Agura Ward", "schoolName": " African Bethel Primary School Maya (24120041)", "schoolCode": "24120041" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Agura Ward", "schoolName": " Methodist Primary School Gberigbe (24120735)", "schoolCode": "24120735" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Aiyegbami Ward", "schoolName": " Egbin Kingdom Nur &Amp  Sch Egbin (24122448)", "schoolCode": "24122448" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Ajaguro Ward", "schoolName": " Idera Community Primary School (24122524)", "schoolCode": "24122524" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Ajaguro Ward", "schoolName": " Togedejoye Communityunity Primary School (24121076)", "schoolCode": "24121076" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Bayeku Ward", "schoolName": " Local Government Primary School Oreta (24120688)", "schoolCode": "24120688" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Ewu Elepe Ward", "schoolName": " Local Government Primary School Igbe (24120683)", "schoolCode": "24120683" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Igbokuta Ward", "schoolName": " Ansar-Ud-Deen Primary School Imota (24120089)", "schoolCode": "24120089" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Igbokuta Ward", "schoolName": " St John&39S Anglican Primary School Imota (24120978)", "schoolCode": "24120978" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Isiu Ward", "schoolName": " Abejoye Primary School Igbokuta (24120010)", "schoolCode": "24120010" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Isiu Ward", "schoolName": " Local Government Primary School Imota (24120684)", "schoolCode": "24120684" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Isiu Ward", "schoolName": " Methodist Primary School Imota (24120739)", "schoolCode": "24120739" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Itunmokun Ward", "schoolName": " Local Government Primary School Bayeku (24120682)", "schoolCode": "24120682" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Odongunyan Ward", "schoolName": " Army Children Nursery/Primary School Odogunyan (24123406)", "schoolCode": "24123406" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Odongunyan Ward", "schoolName": " Farm Settlement Primary School Odogunyan Ikorodu (24120380)", "schoolCode": "24120380" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Odongunyan Ward", "schoolName": " Zumratul Islamiyyah Primary School Odogunyan (24121188)", "schoolCode": "24121188" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Oke Eletu Ward", "schoolName": " Methodist Primary School Agura (24120733)", "schoolCode": "24120733" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Okeyinbo Ward", "schoolName": " Anglican Primary School Ijede (24120082)", "schoolCode": "24120082" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Okeyinbo Ward", "schoolName": " Anwar-Ul-Islam Primary School Ijede (24120092)", "schoolCode": "24120092" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Olori Eyita Ward", "schoolName": " Arts And Craft Centre (24122447)", "schoolCode": "24122447" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Olori Eyita Ward", "schoolName": " Jamaatul Islamiyah Primary Schoolsabo Ikorodu (24120581)", "schoolCode": "24120581" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Solafun Ward", "schoolName": " Osho-Sholu Primary School (24122449)", "schoolCode": "24122449" },
    { "lga": " Ikorodu Local Government Area", "ward": "la Tonabun Ward", "schoolName": " Una Primary School Igbalu (24121114)", "schoolCode": "24121114" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Agboyi Nursery And Primary School (24131475)", "schoolCode": "24131475" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Aina Memorial Nursery And Primary School (24131418)", "schoolCode": "24131418" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Anthony Model Nursery And Primary School (24131482)", "schoolCode": "24131482" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Apostolic Church Nursery And Primary School (24131422)", "schoolCode": "24131422" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Art And Craft Centre Kosofe (24131473)", "schoolCode": "24131473" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Arts And Craft Centre Oworosoki (24130001)", "schoolCode": "24130001" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Arts And Crafts Centre Maryland (24130002)", "schoolCode": "24130002" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayeroju Primary School Oworosoki (24130010)", "schoolCode": "24130010" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Baptist Primary School Kosofe (24130014)", "schoolCode": "24130014" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Communityunity Primary School Magodo Sangisa (24130046)", "schoolCode": "24130046" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Arowosegbe (24130048)", "schoolCode": "24130048" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Maryland (24130049)", "schoolCode": "24130049" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre Kosofe (24130191)", "schoolCode": "24130191" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Maryland (24130188)", "schoolCode": "24130188" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Oworosoki (24130189)", "schoolCode": "24130189" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifako Primary School Gbagada (24130199)", "schoolCode": "24130199" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Irepodun Primary School Kosofe (24130208)", "schoolCode": "24130208" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Kinnium Ifa Primary School Gbagaba (24130230)", "schoolCode": "24130230" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Govt Primary School Kosofe (24130253)", "schoolCode": "24130253" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Maryland Nursery And Primary School (24131593)", "schoolCode": "24131593" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Maryland Nursery And Primary School Maryland (24130265)", "schoolCode": "24130265" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Mosafejo Primary School Kosofe (24130280)", "schoolCode": "24130280" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Mission Primary School Oworo (24130282)", "schoolCode": "24130282" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Oke Ifako Primary School Kosofe (24130302)", "schoolCode": "24130302" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Olowo Ira Primary School Olowo Ira (24130305)", "schoolCode": "24130305" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Oworonsoki Primary School Oworonsoki (24130310)", "schoolCode": "24130310" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " Pastor Adegboyega Memorial Nursery And Primary School Ketu (24130316)", "schoolCode": "24130316" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Agnes Primary School Maryland (24130389)", "schoolCode": "24130389" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " St Francis Primary School Maryland (24130391)", "schoolCode": "24130391" },
    { "lga": " Kosofe Local Government Area", "ward": "Unknown Ward", "schoolName": " United African Church Central Primary School Isheri Oke (24130446)", "schoolCode": "24130446" },
    { "lga": " Kosofe Local Government Area", "ward": "la Agboyi 1 Ward", "schoolName": " Anglican Nursery And Primary School (24131500)", "schoolCode": "24131500" },
    { "lga": " Kosofe Local Government Area", "ward": "la Arowosegbe Alapere Ward", "schoolName": " Ogudu Nursery And Primary School (24131499)", "schoolCode": "24131499" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Ajelogo Nursery And Primary Schools (24131420)", "schoolCode": "24131420" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Ajibola Ayedere Nursery And Primary School (24131400)", "schoolCode": "24131400" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Alapere Nursery And  Sch (24131398)", "schoolCode": "24131398" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Anglican Nursery Primary School Odo-Ogun Ajegunle (24131503)", "schoolCode": "24131503" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Arosegbe Nursery And Primary School Alapere (24131497)", "schoolCode": "24131497" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Expressway Primary School Ii Kosofe (24130101)", "schoolCode": "24130101" },
    { "lga": " Kosofe Local Government Area", "ward": "la Bamgbe/Elebiju ward", "schoolName": " Orisigun Primary School Kosofe (24130307)", "schoolCode": "24130307" },
    { "lga": " Kosofe Local Government Area", "ward": "la Ikosi Oke Ward", "schoolName": " Art And Craft Centre (24131456)", "schoolCode": "24131456" },
    { "lga": " Kosofe Local Government Area", "ward": "la Isheri Olowora Ward", "schoolName": " Isheri Nursery And Primary School (24130210)", "schoolCode": "24130210" },
    { "lga": " Kosofe Local Government Area", "ward": "la Ojota Ward", "schoolName": " Emmanuel Primary School Ojota (24130090)", "schoolCode": "24130090" },
    { "lga": " Kosofe Local Government Area", "ward": "la Ojota Ward", "schoolName": " Gra Primary School Ogudu - Ojota (24130131)", "schoolCode": "24130131" },
    { "lga": " Kosofe Local Government Area", "ward": "la Ojota Ward", "schoolName": " Ojota Primary School Ojota (24130301)", "schoolCode": "24130301" },
    { "lga": " Kosofe Local Government Area", "ward": "la Olubori/Mosafejo Ward", "schoolName": " Araromi Nursery And Primary School (24131477)", "schoolCode": "24131477" },
    { "lga": " Kosofe Local Government Area", "ward": "la Olubori/Mosafejo Ward", "schoolName": " Computer Centre Araromi (24131478)", "schoolCode": "24131478" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ikosi Ward", "schoolName": " Expressway Primary School I Ketu (24130100)", "schoolCode": "24130100" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ikosi Ward", "schoolName": " Home Econimic Centre (24130190)", "schoolCode": "24130190" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ikosi Ward", "schoolName": " Idera Primary School Kosofe (24130197)", "schoolCode": "24130197" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ikosi Ward", "schoolName": " Ikosi Primary School Ketu (24130203)", "schoolCode": "24130203" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ikosi Ward", "schoolName": " Oluwalogbon Nur And Primary School Kosofe (24130306)", "schoolCode": "24130306" },
    { "lga": " Kosofe Local Government Area", "ward": "la Orile Ketu Ward", "schoolName": " Maidan Nursery And Primary School Kosofe (24130258)", "schoolCode": "24130258" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen (24140191)", "schoolCode": "24140191" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Okepopo (24140190)", "schoolCode": "24140190" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Aroromi Baptists Primary School (24140001)", "schoolCode": "24140001" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ Church Cathedral Primary School Lagos Island (24140181)", "schoolCode": "24140181" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Computer Centre Christ Church Cathedral School (24140063)", "schoolCode": "24140063" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Dr Teslim Elias Art And Craft School (24140003)", "schoolCode": "24140003" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Dr Teslim Elias Model Primary School Lagos Island (24140005)", "schoolCode": "24140005" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebute Elefun Nur  School (24140070)", "schoolCode": "24140070" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Edward Blyden Memorial Primary School Lagos Island (24140025)", "schoolCode": "24140025" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Elegbata Computer Centre (24140021)", "schoolCode": "24140021" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Ereko Methodist Computer Centre (24140011)", "schoolCode": "24140011" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Ereko Methodist Primary School Onikan (24140064)", "schoolCode": "24140064" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Fazil Omar Ahmaddiya Primary School Okesuna (24140049)", "schoolCode": "24140049" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Cross Catholic School Lagos Island (24140148)", "schoolCode": "24140148" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Cross Computer Centre (24140030)", "schoolCode": "24140030" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Trinity School Ebute Ero (24140179)", "schoolCode": "24140179" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre Lilg Ekesuna (24140053)", "schoolCode": "24140053" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre St Marys Convent School Lagos (24140086)", "schoolCode": "24140086" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Jamat Ul Islamiyya Primary School Lagos Island (24140152)", "schoolCode": "24140152" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Island Handicraft Centr (24140013)", "schoolCode": "24140013" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Island Local Government Primary School Lagos Island (24140020)", "schoolCode": "24140020" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resource Centre (24140135)", "schoolCode": "24140135" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Olowogbowo Methodist Primary School Lagos Island (24140182)", "schoolCode": "24140182" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St David&#39S Anglican Primary School Lagos Island (24140112)", "schoolCode": "24140112" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Johns Anglican Nursery &Amp Primary School (24140056)", "schoolCode": "24140056" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Marys Convent School Lagos Island (24140114)", "schoolCode": "24140114" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Mattias Boys&#39 School Lagos Island (24140115)", "schoolCode": "24140115" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Mattias Girls&#39 School Lagos Island (24140174)", "schoolCode": "24140174" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Patricks Catholic Primary School Idumagbo (24140116)", "schoolCode": "24140116" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Pauls Anglican Primary School Lagos Island (24140117)", "schoolCode": "24140117" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peters Anglican (Faji) Lagos Popo Aguda (24140118)", "schoolCode": "24140118" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " St Stephens (Waec) Primary School Lagos Island (24140119)", "schoolCode": "24140119" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Stmary Girlsprimary School (24140060)", "schoolCode": "24140060" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Tinubu Methodist Primary School Lagos Island (24140127)", "schoolCode": "24140127" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Union Baptist School (24140146)", "schoolCode": "24140146" },
    { "lga": " Lagos Island Local Government Area", "ward": "Unknown Ward", "schoolName": " Zumratul Islamiyyah Primary School Lagos Island (24140134)", "schoolCode": "24140134" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Adekunle Anglican Primary School Makoko (24150428)", "schoolCode": "24150428" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " African Church Primary School Abule Oja (24150436)", "schoolCode": "24150436" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ago Egba African Church Primary School Lagos Mainland (24150437)", "schoolCode": "24150437" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ago Ijaiye Methodist Primary School Ebute Metta (24150438)", "schoolCode": "24150438" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ahmadiyya Primary School Iwaya (24150440)", "schoolCode": "24150440" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Aiyetoro African Church Primary School Ebute Metta (24150441)", "schoolCode": "24150441" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Akoka Primary School Mainland (24150445)", "schoolCode": "24150445" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " All Saints Anglican Primary School Yaba (24150456)", "schoolCode": "24150456" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Odunfa (24150477)", "schoolCode": "24150477" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Osholake (24150476)", "schoolCode": "24150476" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Yaba (24150482)", "schoolCode": "24150482" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Banjo Primary School Ebute Metta (24150120)", "schoolCode": "24150120" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Catholic Girls Primary School Ebute Metta (24150083)", "schoolCode": "24150083" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ Church Una Odunfa Ebute Metta (24150014)", "schoolCode": "24150014" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ Church Una Oyingbo Ebute Metta (24150016)", "schoolCode": "24150016" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebenezer Primary School Ebute Metta (24150169)", "schoolCode": "24150169" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ebute Metta Primary School Lagos Mainland (24150401)", "schoolCode": "24150401" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Fadeyi Primary School Fadeyi (24150291)", "schoolCode": "24150291" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Fazil Omar Primary School Iwaya (24150306)", "schoolCode": "24150306" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Government Handicraft Centre Ojo Oniyun Ebute Metta [West] Lagos (24150036)", "schoolCode": "24150036" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Government Handicraft Centremyhoung (24150031)", "schoolCode": "24150031" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Govt Handicraft Centre (24150149)", "schoolCode": "24150149" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Herbert Macaulay Primary School Ebute Metta (24150247)", "schoolCode": "24150247" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre (East) (24150384)", "schoolCode": "24150384" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Ebutemetta West (24151052)", "schoolCode": "24151052" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Sabo Yaba (24150011)", "schoolCode": "24150011" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Hussey Military  Sch (24150021)", "schoolCode": "24150021" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ict/Computee Centre Makoko (24151125)", "schoolCode": "24151125" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ict/Computer Center Yaba (24150209)", "schoolCode": "24150209" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijero Baptist Primary School Lagos Mainland (24150230)", "schoolCode": "24150230" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Iponri Olaleye Communityunity Primary School Lagos Mainland (24150292)", "schoolCode": "24150292" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Kadara Primary School Ebute Metta (24150336)", "schoolCode": "24150336" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Ladilak Institute Yaba Yaba Fadeyi (24150345)", "schoolCode": "24150345" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Mainland Local Government Primary School (24150025)", "schoolCode": "24150025" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Mainland Local Government Primary School Ebute Metta (24150420)", "schoolCode": "24150420" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Mainland Mini Resource Centre (24150077)", "schoolCode": "24150077" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Lagos Street African Church Primary School Lagos Str (24150394)", "schoolCode": "24150394" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Makoko Anglican Primary School Makoko (24150222)", "schoolCode": "24150222" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Marywood Primary School Ebute Metta (24150081)", "schoolCode": "24150081" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Military Primary School Lagos Mainland (24150405)", "schoolCode": "24150405" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Modupe Cole Mem Children Care &Amp Treatment Home Akoka (24150069)", "schoolCode": "24150069" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Morocco Military Primary School Yaba (24150034)", "schoolCode": "24150034" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Mount Carmel Convent School Lagos Mainland (24150042)", "schoolCode": "24150042" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Myhoung Military Primary School (24150033)", "schoolCode": "24150033" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " National Primary School Abule Ijesha (24150229)", "schoolCode": "24150229" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Oluwole Primary School Akoka (24150047)", "schoolCode": "24150047" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Onayade Communityunity Primary School Fadeyi (24150112)", "schoolCode": "24150112" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Onike Memorial Baptist Girls Primary School Yaba (24150049)", "schoolCode": "24150049" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Oroku Primary School Ebute Metta West (24150413)", "schoolCode": "24150413" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Our Lady Of Apostles Primary School Ebute Metta (24150173)", "schoolCode": "24150173" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Reagan Mem Baptist Girls Primary School Lagos Mainland (24150422)", "schoolCode": "24150422" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Okobaba (24150133)", "schoolCode": "24150133" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Sen Oluremi Tinubu Nur/ School (24150244)", "schoolCode": "24150244" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Seventh Day Adventist Primary School Abule Oja Yaba (24150379)", "schoolCode": "24150379" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Agnes Catholic Primary School Sabo Yaba (24150079)", "schoolCode": "24150079" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Dominic?S Catholic Primary School Yaba (24150316)", "schoolCode": "24150316" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Jude Anglican Primary School Ebute Metta (24150312)", "schoolCode": "24150312" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Patricks Catholic Primary School Sabo Yaba (24150062)", "schoolCode": "24150062" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Pauls Catholic Primary School Ebuta Metta West (24150162)", "schoolCode": "24150162" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peters Catholic Primary School Ebuta Metta West (24150116)", "schoolCode": "24150116" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Talim Ul Islam Ahmadiyya Primary School Ebute Metta (24150048)", "schoolCode": "24150048" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " The Apostolic Church Primary School E/Metta (24150387)", "schoolCode": "24150387" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " The Salvation Army Primary School Free Man Ebuta Meta (24151012)", "schoolCode": "24151012" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Uamc (Eleja) Apapa Ebute Metta West (24150180)", "schoolCode": "24150180" },
    { "lga": "Lagos Mainland Local Government Area", "ward": "Unknown Ward", "schoolName": " Yaba Methodist Primary School Yaba (24150086)", "schoolCode": "24150086" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Abiodun Nursery And Primary School (24160941)", "schoolCode": "24160941" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Adeleye Home Economics Centre (24160938)", "schoolCode": "24160938" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Adeleye Primary School (24160937)", "schoolCode": "24160937" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Adeniyi Primary School (24160983)", "schoolCode": "24160983" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Agege Motor Road Nursery And Primary School (24160942)", "schoolCode": "24160942" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Aina Sogunro Memorial Primary School (24160991)", "schoolCode": "24160991" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeabo Computer Centre (24161009)", "schoolCode": "24161009" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajeabo Primary School (24160993)", "schoolCode": "24160993" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajenifuja Primary School (24160964)", "schoolCode": "24160964" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Akodu Primary School (24160985)", "schoolCode": "24160985" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Alafia Oluwa Primary School (24160979)", "schoolCode": "24160979" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Alakara Anglican Primary School (24160949)", "schoolCode": "24160949" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Alakara Primary School (24161217)", "schoolCode": "24161217" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School (24160961)", "schoolCode": "24160961" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ur Deen Computer Center (24160957)", "schoolCode": "24160957" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ur Deen Primary School (24160944)", "schoolCode": "24160944" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Araromi Primary School (24160997)", "schoolCode": "24160997" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Nursery And Primary School (24160933)", "schoolCode": "24160933" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayelabowo Primary School (24160959)", "schoolCode": "24160959" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayelabowo Primary School Idi Ora (24160004)", "schoolCode": "24160004" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayetoro Primary School (24161020)", "schoolCode": "24161020" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Baruwa Computer Centre Ijeshatedo (24160009)", "schoolCode": "24160009" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Baruwa Home Economics Centre Ijesha Road (24160010)", "schoolCode": "24160010" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Baruwa Primary School Ijeshatedo (24160011)", "schoolCode": "24160011" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Bereola Memorial Primary School (24160984)", "schoolCode": "24160984" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Biney Home Economics Centre (24160029)", "schoolCode": "24160029" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Biney Memorial Primary School Mosalasi (24160030)", "schoolCode": "24160030" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Christ Central Primary School (24160930)", "schoolCode": "24160930" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Eleja (24160981)", "schoolCode": "24160981" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ilupeju (24160943)", "schoolCode": "24160943" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Mushin (24160065)", "schoolCode": "24160065" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Vocational/ Home Economics Centre Itire (24160066)", "schoolCode": "24160066" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Dosumu Primary School (24160975)", "schoolCode": "24160975" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Durojaiye Primary School Mushin (24160102)", "schoolCode": "24160102" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Eleja Primary School (24160969)", "schoolCode": "24160969" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School Mushin (24160112)", "schoolCode": "24160112" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Expressway Primary School Mushin (24160116)", "schoolCode": "24160116" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Holy Rosery Primary School (24160995)", "schoolCode": "24160995" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Igbehin Adun Primary School Ilasamaja (24160161)", "schoolCode": "24160161" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ilasamaja Road Primary School (24161015)", "schoolCode": "24161015" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ilupeju Primary School (24160939)", "schoolCode": "24160939" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ishaga Close Primary School (24160980)", "schoolCode": "24160980" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Islamic Model Primary School (24160982)", "schoolCode": "24160982" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Isolo Road Primary School (24161008)", "schoolCode": "24161008" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Itire Ikate Primary School (24160978)", "schoolCode": "24160978" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Itire Ikate Primary School Elaja Itire (24160170)", "schoolCode": "24160170" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Itire Primary School Mushin (24160955)", "schoolCode": "24160955" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Itire Road Primary School (24160977)", "schoolCode": "24160977" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Kosybethel Primary School (24160931)", "schoolCode": "24160931" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Layi Oyekanmi Primary School (24160945)", "schoolCode": "24160945" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Orimary School Itire Mushin (24160202)", "schoolCode": "24160202" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Idi Oro (24160948)", "schoolCode": "24160948" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Idi Oro (24161212)", "schoolCode": "24161212" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Megbon (24161033)", "schoolCode": "24161033" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Mainland Model Primary School (24160998)", "schoolCode": "24160998" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Majolate Primary School (24160958)", "schoolCode": "24160958" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Papa Ajoa (24160211)", "schoolCode": "24160211" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Morayo Home Economics Center (24161022)", "schoolCode": "24161022" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Morayo Primary School (24161000)", "schoolCode": "24161000" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Mushin Public Primary School (24160960)", "schoolCode": "24160960" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Muslim Mission Primary School Mushin (24160216)", "schoolCode": "24160216" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Nafrc Primary School Oshodi (24160218)", "schoolCode": "24160218" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " New City Primary School Olorunsugo (24160222)", "schoolCode": "24160222" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Nusara Ud Deen Primary School Mushin (24160229)", "schoolCode": "24160229" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Odi Olowo Nursery And Primary School (24161208)", "schoolCode": "24161208" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Odi Olowo Primary School (24160946)", "schoolCode": "24160946" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Odu Abore Memmorial Primary School (24161005)", "schoolCode": "24161005" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ojuwoye Communityunity Primary School Mushin (24160233)", "schoolCode": "24160233" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Ojuwoye Public Primary School Mushin (24160234)", "schoolCode": "24160234" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Olisa Primary School Papa Ajao (24160235)", "schoolCode": "24160235" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Onipede Primary School (24160976)", "schoolCode": "24160976" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Our Lady Of Fatima Primary School (24160994)", "schoolCode": "24160994" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Oye Home Economics Centre Mushinold Works Yard Mushin (24160241)", "schoolCode": "24160241" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Oye Primary School Mushin (24160242)", "schoolCode": "24160242" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Palm Avenue Home Economic Centre (24160245)", "schoolCode": "24160245" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Palm Avenue Primary School Olorunsogo (24160246)", "schoolCode": "24160246" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Joseph Home Economic Center (24160996)", "schoolCode": "24160996" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Joseph Primary School (24160990)", "schoolCode": "24160990" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Martins Primary School Mushin (24160284)", "schoolCode": "24160284" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Paul African Church Home Economic Center (24160968)", "schoolCode": "24160968" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Paul African Church Primary School (24160936)", "schoolCode": "24160936" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Saint Thomas Primary School (24160992)", "schoolCode": "24160992" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Shyllon Primary School (24160966)", "schoolCode": "24160966" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Sokunbi Primary School Mushin (24160298)", "schoolCode": "24160298" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " Special Children Approved School (24160989)", "schoolCode": "24160989" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St John Anglican Primary School (24160953)", "schoolCode": "24160953" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St John Anglican Primary School Alakara Idioro (24160303)", "schoolCode": "24160303" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Judes Primary School Mushin (24161006)", "schoolCode": "24161006" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Michael Primary School Mushin (24160306)", "schoolCode": "24160306" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Paul Anglican Computer School (24160965)", "schoolCode": "24160965" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Paul Anglican Primary School (24160954)", "schoolCode": "24160954" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Paul Anglican Primary School Idi Oro Mushin (24160307)", "schoolCode": "24160307" },
    { "lga": " Mushin Local Government Area", "ward": "Unknown Ward", "schoolName": " St Philips Nursery And Primary School (24160932)", "schoolCode": "24160932" },
    { "lga": " Mushin Local Government Area", "ward": "la Mushin Atewolara Ward", "schoolName": " Ladipo Primary School Ladipo (24160189)", "schoolCode": "24160189" },
    { "lga": " Mushin Local Government Area", "ward": "la Mushin Atewolara Ward", "schoolName": " Oduduwa Primary School Mushin (24160232)", "schoolCode": "24160232" },
    { "lga": " Mushin Local Government Area", "ward": "la Mushin Atewolara Ward", "schoolName": " Papa Ajao Primary School Matori-Mushin (24160248)", "schoolCode": "24160248" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Aganju Aka Primary School I Abule Akad (24171385)", "schoolCode": "24171385" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Alaworo Primary School Ojo (24171412)", "schoolCode": "24171412" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School I Otto Ijanikin (24170019)", "schoolCode": "24170019" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Anglican Primary School Ii Ojo (24170672)", "schoolCode": "24170672" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Cantonment Primary School Ojo (24170036)", "schoolCode": "24170036" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Children Primary School Ojo (24170037)", "schoolCode": "24170037" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Demonstration Primary School Ojo (24170038)", "schoolCode": "24170038" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Army Model Primary School Ojo (24170544)", "schoolCode": "24170544" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Art And Craft Center (24172582)", "schoolCode": "24172582" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Brigade Primary School Ojo (24170147)", "schoolCode": "24170147" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nur/Primary School Ilemba Awori (24170174)", "schoolCode": "24170174" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Nursery And Primary Schoolibasa Aiyetoro Ijanikin (24170175)", "schoolCode": "24170175" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ijeododo (24170179)", "schoolCode": "24170179" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ketu Ijanikin (24170180)", "schoolCode": "24170180" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ponpoku (24170181)", "schoolCode": "24170181" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Shibiri (24170182)", "schoolCode": "24170182" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School I Iba (24171320)", "schoolCode": "24171320" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School Ii Iba (24170339)", "schoolCode": "24170339" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Alaguntan (24170668)", "schoolCode": "24170668" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Era (24170108)", "schoolCode": "24170108" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Etegbin (24170730)", "schoolCode": "24170730" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ii Ilogbo (24170733)", "schoolCode": "24170733" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ijagemo (24170735)", "schoolCode": "24170735" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Ilogbo Elegba (24170736)", "schoolCode": "24170736" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Irewe (24170737)", "schoolCode": "24170737" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Moba (24170739)", "schoolCode": "24170739" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Muwo Tedi (24170354)", "schoolCode": "24170354" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Okolundu (24170414)", "schoolCode": "24170414" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Primary School Taffi Awori (24171302)", "schoolCode": "24171302" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Military Primary School Ojo (24170802)", "schoolCode": "24170802" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Sabo Oniba Primary School Ii Sabo Oniba (24170488)", "schoolCode": "24170488" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Sabo Oniba Primary School Iii Sabo Oniba (24171003)", "schoolCode": "24171003" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Salvation Army Primary School Olomometa (24171014)", "schoolCode": "24171014" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Francis Catholic Primary School Ojo (24171073)", "schoolCode": "24171073" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Marys Anglican Primary School Idoluwo Ile (24171078)", "schoolCode": "24171078" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Micheal&#39S Anglican Primary School Ii Ojo (24170200)", "schoolCode": "24170200" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Peter Anglican Primary School Ojo (24171084)", "schoolCode": "24171084" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Philips Anglican Primary School Irasiga (24171085)", "schoolCode": "24171085" },
    { "lga": " Ojo Local Government Area", "ward": "Unknown Ward", "schoolName": " Teachers Resource Centre Ojo (24171124)", "schoolCode": "24171124" },
    { "lga": " Ojo Local Government Area", "ward": "la Ajangbadi Ward", "schoolName": " Diu Intschools (24170262)", "schoolCode": "24170262" },
    { "lga": " Ojo Local Government Area", "ward": "la Etegbin Ward", "schoolName": " St John Nursery And Primary School (24170221)", "schoolCode": "24170221" },
    { "lga": " Ojo Local Government Area", "ward": "la Iba Ward", "schoolName": " Aganju-Aka Primary School Ii Ojo (24171386)", "schoolCode": "24171386" },
    { "lga": " Ojo Local Government Area", "ward": "la Iba Ward", "schoolName": " Army Barracks Primary School Ojo (24170033)", "schoolCode": "24170033" },
    { "lga": " Ojo Local Government Area", "ward": "la Iba Ward", "schoolName": " Community Vocational Centre (24170183)", "schoolCode": "24170183" },
    { "lga": " Ojo Local Government Area", "ward": "la Iba Ward", "schoolName": " Local Government Model Nur/Primary School Agric (24170743)", "schoolCode": "24170743" },
    { "lga": " Ojo Local Government Area", "ward": "la Iba Ward", "schoolName": " St Micheal&39S Anglican Primary School I Ojo (24171081)", "schoolCode": "24171081" },
    { "lga": " Ojo Local Government Area", "ward": "la Igbo Elerin Ward", "schoolName": " Local Authority Primary School Iba (24170732)", "schoolCode": "24170732" },
    { "lga": " Ojo Local Government Area", "ward": "la Igbo Elerin Ward", "schoolName": " Local Authority Primary School Ii Isashi (24170734)", "schoolCode": "24170734" },
    { "lga": " Ojo Local Government Area", "ward": "la Igbo Elerin Ward", "schoolName": " Local Authority Primary School Ishasi I (24170660)", "schoolCode": "24170660" },
    { "lga": " Ojo Local Government Area", "ward": "la Ilogbo Elegba Ward", "schoolName": " Community Primary School Ayekoto (24170177)", "schoolCode": "24170177" },
    { "lga": " Ojo Local Government Area", "ward": "la Ilogbo Elegba Ward", "schoolName": " St Marys Anglican Primary School Igbede-Ojo (24171079)", "schoolCode": "24171079" },
    { "lga": " Ojo Local Government Area", "ward": "la Kemberi Ward", "schoolName": " Fazil Omar Ahmadiya Primary School I Ojo (24170378)", "schoolCode": "24170378" },
    { "lga": " Ojo Local Government Area", "ward": "la Kemberi Ward", "schoolName": " Fazil Omar Ahmadiyya Primary School Ii Ojo (24170379)", "schoolCode": "24170379" },
    { "lga": " Ojo Local Government Area", "ward": "la Kemberi Ward", "schoolName": " Fazil Omar Ahmadiyya Primary School Iii Ojo (24170380)", "schoolCode": "24170380" },
    { "lga": " Ojo Local Government Area", "ward": "la Sabo Oniba", "schoolName": " Community Primary School 1 Ajangbadi (24170176)", "schoolCode": "24170176" },
    { "lga": " Ojo Local Government Area", "ward": "la Sabo Oniba", "schoolName": " Community Primary School Ii Ajangbadi (24170178)", "schoolCode": "24170178" },
    { "lga": " Ojo Local Government Area", "ward": "la Sabo Oniba", "schoolName": " Sabo-Oniba Nursery And Primary I Anjangbadi (24172601)", "schoolCode": "24172601" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Afariogun Primary School Orile Oshodi (24180695)", "schoolCode": "24180695" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Afolabi Primary School Oshodi (24180696)", "schoolCode": "24180696" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ageke Primary School Ejigbo (24180697)", "schoolCode": "24180697" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ago Owu Primary School Sogundele (24180699)", "schoolCode": "24180699" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajao Estate Primary School Ajao Estate (24180702)", "schoolCode": "24180702" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajibulu Primary School (24181549)", "schoolCode": "24181549" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Akinbaye Nursery And Primary School (24181497)", "schoolCode": "24181497" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ansar Ud Deen Primary School Isolo (24180104)", "schoolCode": "24180104" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Aregbe Primary School (24181553)", "schoolCode": "24181553" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Asiwaju Bola Aheed Tinubu Primary School Ojo (24180145)", "schoolCode": "24180145" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayo Adegboyega Primary School Ejigbo (24180078)", "schoolCode": "24180078" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Basiru Dania Nursery And Primary School (24181545)", "schoolCode": "24181545" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Central Primary School Oshodi (24180200)", "schoolCode": "24180200" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Primary School Ewutuntun (24180155)", "schoolCode": "24180155" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Community Vocational Center Isolo (24180368)", "schoolCode": "24180368" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Dele Ajomale Primary School (24180015)", "schoolCode": "24180015" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ejigbo Home Economics Centre Ejigbo (24180038)", "schoolCode": "24180038" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ejigbo Model Primary School Ejigbo (24180209)", "schoolCode": "24180209" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Estate Primary School Isolo (24180574)", "schoolCode": "24180574" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ewu Primary School Ewutuntun (24180473)", "schoolCode": "24180473" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Fadu Memorial Primary School Ejigbo (24180219)", "schoolCode": "24180219" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Farombi Primary School Isolo (24180088)", "schoolCode": "24180088" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Folaranmi Primary School Shogunle (24180185)", "schoolCode": "24180185" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Folorunso Primary School Oshodi (24180047)", "schoolCode": "24180047" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbeleyi Primary School Isagatedo Isolo (24180229)", "schoolCode": "24180229" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Hope Primary School (24181546)", "schoolCode": "24181546" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ideal Primary School Oshodi (24180254)", "schoolCode": "24180254" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ifoshi Primary School Ifoshi (24180664)", "schoolCode": "24180664" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ilasamaja Primary School Ilasamaja (24180617)", "schoolCode": "24180617" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Imakiyo Primary School Ejigbo (24180510)", "schoolCode": "24180510" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ipesa Balogun Primary School Oshodi (24180287)", "schoolCode": "24180287" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ire Akari Estate Model Primary School Ire Akari (24180571)", "schoolCode": "24180571" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Ire Akari Primary School Ilasamaja (24180293)", "schoolCode": "24180293" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Islamic Mission Nursery And Primary School (24180294)", "schoolCode": "24180294" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Isolo Art And Craft Vocational Centre (24180300)", "schoolCode": "24180300" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Kusoru Nursary/Primary School (24180032)", "schoolCode": "24180032" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Kusoru Primary School Ilasamaja Isolo (24180257)", "schoolCode": "24180257" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Larinde Nursery And Primary School (24181506)", "schoolCode": "24181506" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Ilewe Meta (24180483)", "schoolCode": "24180483" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Orile Oshodi (24180336)", "schoolCode": "24180336" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Government Primary School Sogunle (24180116)", "schoolCode": "24180116" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Low Cost Housing Estate Primary School I Oshodi Isolo (24180493)", "schoolCode": "24180493" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Low Cost Housing Estate Primary School Ii Oshodi Isolo (24180290)", "schoolCode": "24180290" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Mafoluku Home Economics Centre (24181556)", "schoolCode": "24181556" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Mafoluku Primary School (24181557)", "schoolCode": "24181557" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Mdgs Ict /Computer Center (24180638)", "schoolCode": "24180638" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Nur/Primary School Oshodi (24180097)", "schoolCode": "24180097" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Methodist Primary School Ewutuntun (24180369)", "schoolCode": "24180369" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Mini Resources Center (24180366)", "schoolCode": "24180366" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Monsuru Agoro Memorial Primary School (24181562)", "schoolCode": "24181562" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " New State Primary School Isolo (24180672)", "schoolCode": "24180672" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oba Moruf Primary School Ejigbo (24180131)", "schoolCode": "24180131" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oladele Alake Nursery And Primary School (24181515)", "schoolCode": "24181515" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Olokun Primary School Ii Ilasamaja (24180400)", "schoolCode": "24180400" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Olokun Primary School Ilasamaja (24180024)", "schoolCode": "24180024" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oshodi Art And Craft Centre (24180110)", "schoolCode": "24180110" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oshodi Community Vocational Centre (24180573)", "schoolCode": "24180573" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oshodi Model Primary School Oshodi (24180060)", "schoolCode": "24180060" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Oshodi Primary School Oshodi (24180549)", "schoolCode": "24180549" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Owoseni Primary School Oshodi (24180599)", "schoolCode": "24180599" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Shogunle Home Economics Centre (24180364)", "schoolCode": "24180364" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Johns Catholic Primary School Oshodi (24180464)", "schoolCode": "24180464" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Pauls Anglican Primary School (24181552)", "schoolCode": "24181552" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " St Pauls Anglican Primary School Isaga Isolo (24180468)", "schoolCode": "24180468" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School (Ewutuntun) (24180654)", "schoolCode": "24180654" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " State Primary School (Mafoluku) (24180655)", "schoolCode": "24180655" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Temidire Primary School Sogunle (24180318)", "schoolCode": "24180318" },
    { "lga": " Oshodi/Isolo Local Government Area", "ward": "Unknown Ward", "schoolName": " Wesley Primary School Oshodi (24180529)", "schoolCode": "24180529" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Adaranijo Primary School Bariga (24190484)", "schoolCode": "24190484" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Agunbiade Art And Craft Centre (24191208)", "schoolCode": "24191208" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ajidagan Primary School (24190498)", "schoolCode": "24190498" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ayinke Primary School Ladi Lak (24190529)", "schoolCode": "24190529" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Bashua Military Primary School Shomolo (24190005)", "schoolCode": "24190005" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Bishop Crowther Memorial School Ilaje (24190124)", "schoolCode": "24190124" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbagada East Primary School Gbagada (24190410)", "schoolCode": "24190410" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Gbagada Primary School (24190280)", "schoolCode": "24190280" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre (24191209)", "schoolCode": "24191209" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economic Centre 2Stmc Complex Vocational School (24190232)", "schoolCode": "24190232" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Idi Odo Primary School Gbagada (24190033)", "schoolCode": "24190033" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Idowu Primary School Bariga (24190401)", "schoolCode": "24190401" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Igbehin Adun Primary School Pedro (24190116)", "schoolCode": "24190116" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Jehovah Shallom (Una) Primary School Shomolo (24190450)", "schoolCode": "24190450" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ladilak Primary School Bariga (24190302)", "schoolCode": "24190302" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Lgea Computer Centre (24190305)", "schoolCode": "24190305" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Modupe Primary School Shomolo (24190006)", "schoolCode": "24190006" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " National Orthopaedic Special School Yaba (24190444)", "schoolCode": "24190444" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Odunlade Primary School Shomolu (24190239)", "schoolCode": "24190239" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Oke Meta Mem Primary School Shomolu (24190334)", "schoolCode": "24190334" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Pedro Primary School Shomolu (24190287)", "schoolCode": "24190287" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Ss Peter And Paul Primary School Shomolu (24190007)", "schoolCode": "24190007" },
    { "lga": " Shomolu Local Government Area", "ward": "Unknown Ward", "schoolName": " Temidire Primary School Shomolu (24190405)", "schoolCode": "24190405" },
    { "lga": " Shomolu Local Government Area", "ward": "la Akoka/ Anuoluwapo Ward", "schoolName": " Ayetoro Primary School Akoka Ladlak (24190528)", "schoolCode": "24190528" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Abule-Ayo Primary School Bariga (24190482)", "schoolCode": "24190482" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Adeife Sodipo-Akindeko Memorial Primary School Bariga (24190489)", "schoolCode": "24190489" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Alubarika Primary School Bariga (24190509)", "schoolCode": "24190509" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Apelehin Primary School Bariga (24190516)", "schoolCode": "24190516" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Arch-Deacon Adelaja Primary School (24190518)", "schoolCode": "24190518" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Art And Craft Centre Cms Complex Bariga (24190519)", "schoolCode": "24190519" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Bariga Primary School (24191211)", "schoolCode": "24191211" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Bishop Howells Memorial Grammar School (24190020)", "schoolCode": "24190020" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Cms Primary School Shomolo (24190015)", "schoolCode": "24190015" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Mini Resource Centre (24190256)", "schoolCode": "24190256" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " National Primary School Gbagada (24190049)", "schoolCode": "24190049" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Oduduwa Primary School Gbagada (24190285)", "schoolCode": "24190285" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Ogo Oluwa Primary School Shomolu (24190240)", "schoolCode": "24190240" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Shomolu Lga Primary School Shomolu (24190442)", "schoolCode": "24190442" },
    { "lga": " Shomolu Local Government Area", "ward": "la Ayetoro Mafowokun Ward", "schoolName": " Temple Primary School Shomolu (24190370)", "schoolCode": "24190370" },
    { "lga": " Shomolu Local Government Area", "ward": "la Bajulaiye Ward", "schoolName": " Adebule Primary School Bajulaiye (24190487)", "schoolCode": "24190487" },
    { "lga": " Shomolu Local Government Area", "ward": "la Bashua Ward", "schoolName": " St Augustine&39S Primary School Bashua Shomolu (24190414)", "schoolCode": "24190414" },
    { "lga": " Shomolu Local Government Area", "ward": "la Bashua Ward", "schoolName": " St Paul&39S (Una) Primary School Bashua Shomolu (24190363)", "schoolCode": "24190363" },
    { "lga": " Shomolu Local Government Area", "ward": "la Bashua Ward", "schoolName": " St Peter&39S(Una) Primary School Bashua Shomolu (24190268)", "schoolCode": "24190268" },
    { "lga": " Shomolu Local Government Area", "ward": "la Igbobi/ Fadeyi Ward", "schoolName": " Igbobi Computer Centre Morocco Somolu (24190246)", "schoolCode": "24190246" },
    { "lga": " Shomolu Local Government Area", "ward": "la Igbobi/ Fadeyi Ward", "schoolName": " Igbobi Primary School Shomolo (24190466)", "schoolCode": "24190466" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Agunbiade Primary School Shomolu (24190497)", "schoolCode": "24190497" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Baptist Primary School Shomolu (24190091)", "schoolCode": "24190091" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Ijebutedo Primary School Palmgrove (24190261)", "schoolCode": "24190261" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Ola Olu Primary School Shomolu (24190449)", "schoolCode": "24190449" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Wesley Mem Primary School Shomolu (24190016)", "schoolCode": "24190016" },
    { "lga": " Shomolu Local Government Area", "ward": "la Onipanu Ward (Shomolu)", "schoolName": " Wright Mem Primary School Shomolu (24190439)", "schoolCode": "24190439" },
    { "lga": " Shomolu Local Government Area", "ward": "la Pedro/Gbagada Ward", "schoolName": " Baptist Academy Primary School Obanikoro (24190001)", "schoolCode": "24190001" },
    { "lga": " Shomolu Local Government Area", "ward": "la Pedro/Gbagada Ward", "schoolName": " Saviours Primary School (24190408)", "schoolCode": "24190408" },
    { "lga": " Shomolu Local Government Area", "ward": "la Pedro/Gbagada Ward", "schoolName": " Shepherdhill Primary School Obanikoro (24190352)", "schoolCode": "24190352" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Atara Health Centre Primary School Aguda (24200003)", "schoolCode": "24200003" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Obele Odan Primary School Oba-Olowu (24200035)", "schoolCode": "24200035" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Moslem Nursery And Primary (24200038)", "schoolCode": "24200038" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Rabiatu Thompson Primary School Surulere (24200044)", "schoolCode": "24200044" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Nathan Primary School Surulere (24200062)", "schoolCode": "24200062" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Atunda Olu School For Physically And Mentally Challenged Surulere (24200073)", "schoolCode": "24200073" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Elizabeth Fowler Memorial Primary School Surelere (24200074)", "schoolCode": "24200074" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Raufu Williams Primary School Surulere (24200081)", "schoolCode": "24200081" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Randle Avenue Primary School Surulere (24200090)", "schoolCode": "24200090" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Salvation Army Primary School Surulere (24200094)", "schoolCode": "24200094" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Clementina Ajigbeda Memorial Girls Primary School Surulere (24200096)", "schoolCode": "24200096" },
    { "lga": " Surulere Local Government Area", "ward": "la Osho Ward", "schoolName": " Canal Nursery Primary School Orile- Iganmu (24200105)", "schoolCode": "24200105" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Central Nur And Primary School Orile Iganmu (24200107)", "schoolCode": "24200107" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Ijeshatedo Primary School Surelere (24200135)", "schoolCode": "24200135" },
    { "lga": " Surulere Local Government Area", "ward": "la Jinadu Aiyetoro Ward", "schoolName": " Coker Primary School Ii Orile-Iganmu (24200140)", "schoolCode": "24200140" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Enitan Nursery And Primary School Surelere (24200141)", "schoolCode": "24200141" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Dedeke Memorial Girls Primary School Dedeke (24200148)", "schoolCode": "24200148" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Surulere Baptist Primary School Surulere (24200153)", "schoolCode": "24200153" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Ideal Primary School Surulere (24200169)", "schoolCode": "24200169" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Premier Day Primary School Surulere (24200192)", "schoolCode": "24200192" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Erinoso Primary School Surelere (24200211)", "schoolCode": "24200211" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Mini Resource Centre (24200217)", "schoolCode": "24200217" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Wesley School For Deaf Ii Special Primary School Surelere (24200244)", "schoolCode": "24200244" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Immam Shuaib Primary School Ijeshatedo (24200264)", "schoolCode": "24200264" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Jehovah Jireh Primary School Surulere (24200269)", "schoolCode": "24200269" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Lagos Progressive Primary School Surulere (24200286)", "schoolCode": "24200286" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Obele Primary School Surulere (24200311)", "schoolCode": "24200311" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Odo Olowu Primary Ijeshatedo (24200312)", "schoolCode": "24200312" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Onitolo Primary School Surulere (24200319)", "schoolCode": "24200319" },
    { "lga": " Surulere Local Government Area", "ward": "la Osho Ward", "schoolName": " Orile Iganmu Primary School Orile-Iganmu (24200322)", "schoolCode": "24200322" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Our Lady Of Lourdes Home Economic Centre (24200323)", "schoolCode": "24200323" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Our Lady Of Lourdes Primary School Ojuelegba (24200324)", "schoolCode": "24200324" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Sanya Nursery And Primary School Ijeshatedo Surulere (24200356)", "schoolCode": "24200356" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Shamsideen Islamiyyah Primary School Ojuelegba (24200360)", "schoolCode": "24200360" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Subuola Primary School Lawanson Surulere (24200372)", "schoolCode": "24200372" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Surulere Computer Centre (24200374)", "schoolCode": "24200374" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Wesley School For Deaf I Special Primary School Surelere (24200409)", "schoolCode": "24200409" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Yaba Model Primary School Surelere (24200413)", "schoolCode": "24200413" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Home Economics Centre (24200427)", "schoolCode": "24200427" },
    { "lga": " Surulere Local Government Area", "ward": "la Jinadu Aiyetoro Ward", "schoolName": " Home Economics Centre Coker (24200428)", "schoolCode": "24200428" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Surulere Primary School Ojuelegba (24200439)", "schoolCode": "24200439" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Umoru Primary School I Orile Iganmu (24200443)", "schoolCode": "24200443" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Duro Oyedoyin Primary School Ijeshatedo (24200448)", "schoolCode": "24200448" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Local Authority Nursery Primary School Surulere (24200452)", "schoolCode": "24200452" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Estate Baptist Primary School Surelere (24200467)", "schoolCode": "24200467" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Sijuade Primary School Surulere (24200474)", "schoolCode": "24200474" },
    { "lga": " Surulere Local Government Area", "ward": "la Jinadu Aiyetoro Ward", "schoolName": " Umoru Primary School Ii Orile-Iganmu (24200487)", "schoolCode": "24200487" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Shitta Primary School Surulere (24200496)", "schoolCode": "24200496" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Gbaja Primary School Gbaja (24200507)", "schoolCode": "24200507" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Jinadu Primary School Surulere (24200522)", "schoolCode": "24200522" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Abimbola Gibson Mem Primary School Surulere (24200531)", "schoolCode": "24200531" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Abina Omololu Primary School Surulere (24200532)", "schoolCode": "24200532" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Adebola Baptist Primary School Surulere (24200538)", "schoolCode": "24200538" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Adegoke Computer Centre (24200539)", "schoolCode": "24200539" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Adegoke Primary School Surulere (24200540)", "schoolCode": "24200540" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Adeniji Nursery And Primary School Surulere (24200541)", "schoolCode": "24200541" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Adisa Bashua Primary School Surulere (24200543)", "schoolCode": "24200543" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Aguntasolo Primary School Ijeha Surulere (24200549)", "schoolCode": "24200549" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Aiyetoro Nursery Primary School Agudasurulere (24200551)", "schoolCode": "24200551" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Akanji Primary School Surulere (24200553)", "schoolCode": "24200553" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Akin Jacobs Memorial Baptist Primary Surelere (24200554)", "schoolCode": "24200554" },
    { "lga": " Surulere Local Government Area", "ward": "la Shitta/Bankolemoh Ward", "schoolName": " Akinsemoyin Primary School Surulere (24200555)", "schoolCode": "24200555" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Al Wajud Primary School Surulere (24200562)", "schoolCode": "24200562" },
    { "lga": " Surulere Local Government Area", "ward": "la Osho Ward", "schoolName": " Alafia Primary School Surulere (24200563)", "schoolCode": "24200563" },
    { "lga": " Surulere Local Government Area", "ward": "la Mosafejo / Ojuelegba Ward", "schoolName": " Anglican Girls Primary Surulere (24200571)", "schoolCode": "24200571" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Animashaun Primary School Surulere (24200572)", "schoolCode": "24200572" },
    { "lga": " Surulere Local Government Area", "ward": "la Jinadu Aiyetoro Ward", "schoolName": " Coker I Nursry And Primary School (24201144)", "schoolCode": "24201144" },
    { "lga": " Surulere Local Government Area", "ward": "Unknown Ward", "schoolName": " Home Economics Centre Sanya (24201148)", "schoolCode": "24201148" }
];
