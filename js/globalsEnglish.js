// in scripts, import me this jQuery way:
// $.getScript("my_lovely_script.js", function(){  })

// HomePage
var language = 'English'
var langswaptext = 'Ελ'
var langfulltext = 'ληνικά'

var bannerTxt = './images/banner_text_en.jpg'
var contribute_link = 'CONTRIBUTORS'

var modulesLang = ['CV','Photos','Invitations','Printings – Handwritings'];
var homemodulesLang = ['CV','PHOTOS','INVITATIONS','PRINTINGS – HANDWRITINGS'];
// if matrix size changed, also change in ../index.html { var modules }

var firefoxIsBetter = 'best viewed by using firefox'
//////////////////////////CONTRIBUTORS///////////////////////////
contributors_txt = '<br /> \
<br /> \
<span class="T2">Archive / Photographic Material</span><br /> \
Aspasia Papadoperaki, Hélène Papadoperaki<br /> \
<br /> \
<br /> \
<span class="T2">Editing</span><br /> \
Angeliki Baltatzi<br /> \
<br /> \
<br /> \
<span class="T2">Translation</span><br /> \
Rosemary Tzanaki, Dimitris Saltabasis <br /> \
<br /> \
<br /> \
<span class="T2">Corrections</span><br /> \
Rosemary Tzanaki<br /> \
<br /> \
<br /> \
<span class="T2">Image scanning</span><br /> \
Devon Laughlin, Katerina Tylaki<br /> \
<br /> \
<br /> \
<span class="T2">Software Development</span><br /> \
Manolis Stratigis'

////////////////////////////////////////////////////////////////////////////////////////////////
// image gallery

var galleryLang = ['CHILDHOOD', 'YOUTH', 'EXHIBITIONS', 'MOMENTS']; 


        var photosAmount =  [4, 7, 5, 9];
        var photoNotesLang = new Array(photosAmount.length);
        photoNotesLang[0] = ['In his mother’s arms and with his siblings Giorgos and Aspasia, 1944',
                        'Left to right: Thomas, Aspasia and Giorgos Papadoperakis, 1947',
                        'Next to his mother and with his siblings Giorgos and Aspasia, 1949-1950',
                        'The Papadoperakis family, 1950'
                        ];                        
        photoNotesLang[1] = [
                        'At the entrance to the Athens School of Fine Arts, 1960s',
                        'Showing his work to Professor K. Grammatopoulos, 1960s',
                        'In front of a painted decoration by himself during his army service, 1968',
                        'Paris, 1972',
                        'At his Paris atelier (Rue de Rennes, 1972-1976)',
                        'Paris, 1972',
                        '1970s'
                        ];                        
        photoNotesLang[2] = ['With Yannis Kreonidis, Yannis Tsarouchis and Takis Sideris at the opening of their exhibition at the <span class="T2">Kreonidis Gallery</span>, 1986',
                        'Sculptor Aspasia Papadoperaki (sister of Thomas) with theatre studies professor and stage director Tilemachos Moudatsakis, in front of a work by Thomas Papadoperakis. <span class="T2">Nautilus</span>, 1990',
                        'With his daughter Louise at <span class="T2">ARTJonction 98</span> in Nice',
                        '<span class="T2">The Art of Living</span> exhibition at the <span class="T2">Vikla Gallery</span>, Thessaloniki, 1999',
                        '<span class="T2">The Art of Living</span> exhibition at the <span class="T2">Vikla Gallery</span>, Thessaloniki, 1999',
                        'With art historian Enrico Pedrini at <span class="T2">ARTJonction 01</span>, Nice'
                        ];                        
        photoNotesLang[3] = ['Fellow artists \
<br />\
Left to right: Georgios Georgiadis (sculptor), Spyros Koursaris (painter), Stefanos Daskalakis (painter), Petros Zoumboulakis (painter), Dimitris Armakolas (sculptor), Vangelis Moustakas (sculptor), Stavros Katsireas (painter), Theodoros Papayannis (sculptor), Thomas Papadoperakis and Antonis Apergis (painter)',
                        'At the atelier of painter Petros Zoumboulakis  \
<br />\
Left to right: Sonia Vassilaki, Thomas Papadoperakis, Aspasia Papadoperaki (sculptor and sister of Thomas), Aria Komianou (printmaker)',
                        'On Thomas Papadoperakis’s name-day at his home in Lykovryssi in 1983, with relatives, friends, artists and Yannis Tsarouchis.',
                        'The Papadoperakis siblings (Thomas, Yannis, Aspasia, Giorgos), at an exhibition of sculpture (<span class="T2">Maria Callas</span>) by Aspasia Papadoperaki. <span class="T2">Goethe-Institut</span>, Athens, 1985',
                        'At the dinner after being awarded the <span class="T2">Nikos Kazantzakis Prize</span>, between former Mayor of Heraklion Manolis Karellis and his wife, 1988',
                        'Working on a still life in the cave (Spilia, Heraklion).',
                        'At his atelier in Nice in front of a work depicting Eastern musical instruments, 1995',
                        'The Papadoperakis siblings being awarded a prize by the Kissamos Association of Chania. Their parents were originally from Kissamos',
                        'With his wife Hélène, Nice 8-9-2002'
                        ];

//////////////////////////////////////////////////////////////////////////////////////////////
//  Invitation Buttons

var invAmount = 11;
var invNotes = new Array(invAmount)
invNotes[0] = 
  '<span class="T2">Zalokosta 7 Gallery</span>, 1985 (Athens)'
  
invNotes[1] =   
   '<span class="T2">Epohes Gallery</span>, 1986 (Athens)'
    
invNotes[2] =     
  '<span class="T2">Kreonidis Gallery</span>, 1986 (Athens)'
   
invNotes[3] =    
  '<span class="T2">Gallery Tria</span>, 1989 (Athens)'
  
invNotes[4] =  
  '<span class="T2">Epohes Gallery</span>, 1989 (Athens)'
  
invNotes[5] =   
  '<span class="T2">Nautilus</span> Room, 1990 (Heraklion)'
  
invNotes[6] =   
  '<span class="T2">Aenaon</span> International Centre of Fine Arts, 1990 (Athens)'
  
invNotes[7] =   
  'Contemporary Art Fair <span class="T2">Art Athina 4</span>, 1996 (Athens)'
  
invNotes[8] =   
 '<span class="T2">Art Forum</span> / <span class="T2">Vilka Gallery</span>, 1999 (Thessaloniki)'
  
invNotes[9] =   
  'Lykovryssi Cultural Center, 2001 (Attica)'
  
invNotes[10] =   
  'Contemporary Art Fair <span class="T2">Art Athina</span>, 2004 (Athens)'



/////////////////////////////////Press//////////////////////////////////////////////
pressNotes = new Array(10)
pressNotes = [
    'Thomas Papadoperakis exhibition catalogue, <span class="T2">Galerie Tria</span>, 1989',
    'Article by Thomas Papadoperakis, <span class="T2">Views on the content and functionality of painting</span>, KRITI monthly review (Athens), No. 67, Visual Arts column, pp. 12-13, 1979',
    '<span class="T2">Destruction</span> postcard, group exhibition <span class="T2">L’Art et l’Euro</span>, Nice (France), 2002',
    'Back cover of a leaflet by <span class="T2">Galerie KARGADOS</span>. Group exhibition with the participation of Thomas Papadoperakis (painting) and his sister Aspasia Papadoperaki (sculpture). Tiengen (Germany), 1990',
    'Cover of the book <span class="T2">Beton Aggelou</span> (<span class="T2">Angel Concrete</span>) by Athena Karataraki, depicting a work by Thomas Papadoperakis. Theme taken from a photograph in the album by Nikos Panayotopoulos, <span class="T2">Asylo: Psychiatriko Idryma Lerou,1982</span> (<span class="T2">Asylum: Leros Psychiatric Foundation, 1982</span>)',
    'Greetings card created by Thomas Papadoperakis, sent to his sister Aspasia while he was doing his army service (1967)',
    'Handwritten CV by Thomas Papadoperakis',
    'Letter by Thomas Papadoperakis to his sister Sosó (Aspasia Papadoperaki), Paris, 11-5-1970',
    '<span class="T2">Thomas Papadoperakis (1943-2002): Thinker and Painter</span>. Article by Dora Iliopoulou-Rogan in memory of Thomas Papadoperakis. <span class="T2">Ta Nea tis Technis</span> online newspaper, Νο. 1, 2003',
    'Article in <span class="T2">TOLMI</span> newspaper (24 September 2006) on the <span class="T2">House of Memory on Andros</span>, dedicated to the memory of Thomas Papadoperakis, an initiative by the painter’s sister, sculptor Aspasia Papadoperaki'
    ]

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CV
// convert -density 150 -verbose CVen.pdf ./CVen/CVen.png  (imagemagick)
//CV_url = new Array();
//for (i=0; i<=17; i++) {
//      CV_url[i] = './CV/CVen/CVen-' + i + '.png';
//}

var cv_linklez = new Array();
cv_linklez = [
    pressNotes[6]
    ,photoNotesLang[0][0]
    ,photoNotesLang[1][0]
    ,photoNotesLang[1][1]
    ,photoNotesLang[1][3]
    ,photoNotesLang[3][2]
    ,photoNotesLang[3][4]
    ,''
    ,''
    ,photoNotesLang[2][3]
    ,''
    ,photoNotesLang[2][0]
    ,pressNotes[2] //
    ,photoNotesLang[2][2]
    ,photoNotesLang[2][5]
    ,photoNotesLang[3][4]
    ,''
    ,photoNotesLang[3][8]
    ,photoNotesLang[3][6]
    ,pressNotes[8]    
    ]     

CV_text = new Array();
CV_text = [
'<span class="Tb_14_cent">Thomas PAPADOPERAKIS<br />\
Painter - Printmaker</span><br />\
<br />\
<span class="Tb_14_cent_shad"><a class="card" href ="#" id="0_cv">CURRICULUM VITAE</a></span><br />\
­<br />\
<a href ="#" id="1_cv">Born</a> in 1943 in Spilia, Heraklion, Crete.<br />\
<br />\
<span class="Tb_14_cent_shad">STUDIES</span><br />\
\
<span class="Tbu">HERAKLION 1955 - 1960</span><br />\
<br />\
He studied Byzantine Iconography (Cretan School) under Stylianos KARTAKIS, from whom he also received his first drawing lessons (concurrently with his high school studies). In 1960, he produced the bust of Nikos KAZANTZAKIS, on display at the museum of the same name. <br />\
<br />\
<span class="Tbu">ATHENS 1960 - 1970</span><br />\
<br />\
<span class = "Tb">1960 - 1961</span><br />\
Studied drawing at a private school under Theodoros Drossos.<br />\
<span class = "Tb">1961 </span><br />\
Admitted (ranking first) to the preliminary course of the <a href ="#" id="2_cv">Athens School of Fine Arts</a>, under George Mavroides.<br />\
<span class = "Tb">1962</span><br />\
Admitted (ranking first) to the painting workshop and (also ranking first) to the printmaking workshop, which he elected, under professor <a href ="#" id="3_cv">Konstantinos GRAMMATOPOULOS</a> (with a scholarship from the Greek State Scholarship'
+
' Foundation). Concurrently, he received training by the painter Yannis'
,
'TSAROUCHIS. In 1964, on the 350th anniversary of the death of Domenicos Theotokopoulos, he produced, jointly with Yannis Tsarouchis, life-size copies after works by the master for the play <span class = "T2">El Greco</span>, produced in Heraklion, Crete by Manos KATRAKIS.<br />\
<span class = "Tb">1965</span><br />\
Enrolled at the scenography workshop taught by Vassileios VASSILEIADIS; during the same year, he produced three life-size copies of works by BOTTICELLI for the play <span class = "T2">The Holy Sacrifice</span> by Pantelis PREVELAKIS, produced by the National Theatre with set designs by Vassileios Vassiliadis.<br />\
<span class = "Tb">1966</span><br />\
Received his Printmaking and Theoretical Studies Diploma from the Athens School of Fine Arts with two distinctions for evening nude and cum laude for woodcut composition.<br />\
<span class = "Tb">1969</span><br />\
Set Design Diploma from the Athens School of Fine Arts cum laude for poster design.<br />\
<br />\
<span class="Tbu"><a href ="#" id="4_cv">PARIS 1970 - 1977</a></span><br />\
<br />\
<span class = "Tb">1970</span><br />\
Admitted to the painting workshop of the <span class = "T2">Έcole Nationale Supérieure des <span class = "T2">Beaux-Arts</span> (ENSB-A) in Paris under Gustave SINGIER.<br />\
<span class = "Tb">1974</span><br />\
Won a three-year scholarship from the National Organization of Hellenic Handicrafts for pottery at the ENSB-A in Paris.<br />\
<span class = "Tb">1976</span><br />\
Degree in Painting from the ENSB-A in Paris (Mention Bien – Honours).<br />\
<br />\
\
\
\
During his seven-year stay in Paris he regularly met with <a href ="#" id="5_cv">Yannis Tsarouchis</a>, who helped him in his pursuit of painting.<br />'
,
'<span class="Tb_14_cent_shad">­EXHIBITIONS</span><br />\
\
<span class="Tb">SOLO EXHIBITIONS</span><br />\
<br />\
<span class = "Tb">1968</span><br />\
-Serres, Serres Chamber<br />\
<span class = "Tb">1974	</span><br />\
-Athens, <span class = "T2">ORA Gallery</span><br />\
<span class = "Tb">1979	</span><br />\
-Athens, <span class = "T2">KREONIDIS Gallery</span><br />\
<span class = "Tb">1988	</span><br />\
-Heraklion, Saint Mark’s Basilica for the <span class = "T2">Nikos KAZANTZAKIS</span> Award (with sculptor M. Tzobanakis)<br />\
<span class = "Tb">1989	</span><br />\
-Athens, <span class = "T2"><a href ="#" id="7_cv">Gallery Tria</a></span><br />\
-Thessaloniki, <span class = "T2">ARTFORUM Gallery</span><br />\
<span class = "Tb">1990	</span><br />\
-Heraklion, <span class = "T2"><a href ="#" id="8_cv">Nautilus</a></span> Bookstore, a tribute to EL GRECO on the occasion of the major Theotokopoulos exhibition in Heraklion, Crete in summer 1990, on the 450th anniversary of the master\'s birth<br />\
<span class = "Tb">1995	</span><br />\
-Nice (France), J. Guillot\'s <span class = "T2">ALLIANZ VIA</span> Insurance Company<br />\
-Nice (France), <span class = "T2">Maison des Artistes</span>, Nice, Côte d\'Azur<br />\
<span class = "Tb">1996	</span><br />\
-Villefranche-sur-Mer, Chapelle Sainte Elisabeth, <span class = "T2">L\'Été Grec</span>, organized by the Greek Consulate in Nice (14/6-15/7)<br />\
-Nice (France), International Artists Exhibition, <span class = "T2">DIRECT ART</span> (22/9-2/10)<br />\
-Saint-Laurent-du-Var (France), CANICULE Advertising Company\'s annual exhibition, <span class = "T2">Parentheses</span> , with the sculptor G. Sassier' //<br />\
,
'<span class = "Tb">1999</span><br />\
-Nice (France), SAINTE REPARATE Gallery, <span class = "T2">Manifeste: L\'Art de la Vie</span>,                organized by the Municipality of Nice (9/4-29/5)<br />\
-Thessaloniki, ARTFORUM Gallery, <span class = "T2"><a href ="#" id="9_cv">The Art of Living</a></span> (November)<br />\
<span class = "Tb">2001</span><br />\
-Lykovryssi, Athens, Municipal Cultural Centre, <span class = "T2"><a class="card" href ="#" id="10_cv">A Brief Retrospective</a></span> <br />\
<span class = "T2">(4-21/10)</span><br />\
<br />\
<span class="Tb_14">GROUP EXHIBITIONS</span> <span class = "Tb">(selection)</span><br />\
<br />\
<span class = "Tb">GREECE </span><br />\
<br />\
<span class = "Tb">1964</span><br />\
-Athens, 3rd National Youth Art Fair<br />\
<span class = "Tb">1969</span><br />\
-10th National Art Fair<br />\
<span class = "Tb">1971</span><br />\
-11th National Art Fair<br />\
<span class = "Tb">1973</span><br />\
-12th National Art Fair<br />\
<span class = "Tb">1975</span><br />\
-13th National Art Fair<br />\
<span class = "Tb">1987</span><br />\
-14th National Art Fair<br />\
<span class = "Tb">1972</span><br />\
-1st Cretan Art Fair, Chania<br />\
<span class = "Tb">1974</span><br />\
-2nd Cretan Art Fair, Chania<br />\
<span class = "Tb">1976</span><br />\
-3rd Cretan Art Fair, Chania' //<br />\
,
'<span class = "Tb">1976</span><br />\
-Athens, National Gallery, <span class = "T2">A Panorama of 50 Years of Greek Painting</span>, organized by the <span class = "T2">National Gallery</span> in Athens<br />\
<span class = "Tb">1983</span><br />\
-Athens, National Gallery, <span class = "T2">Contemporary Trends in Greek Painting</span>, organized by the National Gallery in Athens<br />\
<span class = "Tb">1986</span><br />\
-Athens, <span class = "T2"><a href ="#" id="11_cv">KREONIDIS Gallery</a></span> , with Yannis Tsarouchis and Takis Sideris<br />\
<span class = "Tb">1986</span><br />\
-Kifissia, <span class = "T2">TRIGONO Gallery</span>, with Yannis Tsarouchis and Takis Sideris<br />\
<span class = "Tb">1998</span><br />\
-Rethymnon, <span class = "T2">CENTRE FOR CONTEMPORARY ART</span> , <br />\
<span class = "T2">With the Lyre and the Bow</span><br />\
<br />\
<span class="Tb_14">Posthumously</span><br />\
<br />\
<span class = "Tb">2007</span><br />\
-Vori, Crete, Museum of Cretan Ethnology Research Center, <span class = "T2">Artists from Eastern Crete 1930-2007</span> (7-21/09)<br />\
<span class = "Tb">2009</span><br />\
-Athens, Athens Municipality Technopolis (Gazi), <span class = "T2">The Human Figure in Art</span> (21/12 - 24/01/2010)<br />\
<br />\
<span class="Tb_14">OUTSIDE GREECE</span><br />\
<br />\
<span class = "Tb">1973</span><br />\
-Toulon (France), 23rd World Fair, Toulon Festival<br />\
<span class = "Tb">1975</span><br />\
-Paris (France), 1st Exhibition of Young Greek Artists'//<br />\
,
'<span class = "Tb">1977</span><br />\
<span class = "Tb">-</span>Paris (France), <span class = "T2">Paul-Louis Weiller</span>, International Portrait Exhibition<br />\
-Normandy (France), <span class = "T2">6th Salon de la Côte d\'Albâtre</span><br />\
<span class = "Tb">1978</span><br />\
<span class = "Tb">-</span>Nicosia (Cyprus), <span class = "T2">Contemporary Greek Painters</span> , organized by the National Gallery in Athens<br />\
<span class = "Tb">1979</span><br />\
<span class = "Tb">-</span>Dublin (Ireland), <span class = "T2">Contemporary Greek Painters</span> , held at the National Gallery in Athens<br />\
<span class = "Tb">1980</span><br />\
<span class = "Tb">-</span>Bucharest (Romania), <span class = "T2">Balkan Art Fair</span> (<span class = "Tb">Special distinction</span>), organized by the Ministry of Culture and Science<br />\
<span class = "Tb">1983</span><br />\
-Algiers (Algeria), <span class = "T2">Mediterranean Countries Art Fair</span> , Greek participation organized by the Municipality of Athens<br />\
<span class = "Tb">1988</span><br />\
<span class = "Tb">-</span>Brussels (Belgium), <span class = "T2">Greek Painting 1968-88</span> , organized by the National Gallery in Athens at the European Commission headquarters and the Secretariat of the Council of Ministers of the European Communities<br />\
<span class = "Tb">1995</span><br />\
-Beaulieu-sur-Mer (France), <span class = "T2">Festival des Arts</span> , under the auspices of the Municipality<br />\
<span class = "Tb">1999</span><br />\
<span class = "Tb">-</span>Monaco, <span class = "T2">Prix International d\'Art Contemporain</span> , annual exhibition organized by the Principality, where the artist represented Greece<br />\
<br />\
<span class="Tb_14">Posthumously</span><br />\
<br />\
<span class = "Tb">2002</span><br />\
<span class = "Tb">-</span>Nice (France), <span class = "T2"><a class="card" href ="#" id="12_cv">L\'Art et l\'Euro</a></span> , organized by the Bank <span class = "T2">Caisse d\'Epargne</span>, Côte'
,
' d\'Azur<br />\
<span class = "Tb">2003</span><br />\
<span class = "Tb">-</span>Cagnes-sur-Mer (France), Maison des Artistes, <span class = "T2">Correspondances</span> , with Coop\'Art (07-23/06)<br />\
-Cagnes-sur-Mer (France), Château-Musée Grimaldi, <span class = "T2">Portraits</span> , André Verdet Collection (13/12-22/04/04)<br />\
<span class = "Tb">2006</span><br />\
<span class = "Tb">-</span>Carros (France), <span class = "T2">International Center for Contemporary Art</span>, André Verdet collection (summer)<br />\
<span class = "Tb">2012</span><br />\
<span class = "Tb">-</span>Carros (France), <span class = "T2">International Center for Contemporary Art</span>, André Verdet collection, in a room dedicated to his collection<br />\
<br />\
<span class = "Tb_14">Fairs (Solo Exhibitions)</span><br />\
<br />\
\
<span class = "Tb">1995</span><br />\
<span class = "T2">ART JONCTION</span>, Cannes (France), <span class = "T2">ARTFORUM Gallery</span>, Thessaloniki<br />\
<span class = "Tb">1996</span><br />\
<span class = "T2">ART ATHINA</span>, <span class = "T2">Ariadne Gallery</span> , Heraklion, Crete (with sculptress Aspasia Papadoperaki)<br />\
<span class = "Tb">1998</span><br />\
<span class = "Tb">-</span><span class = "T2"><a href ="#" id="13_cv">ART JONCTION</a></span>, Nice (France), <span class = "T2">ARTFORUM VILKA Gallery</span>, Thessaloniki, <span class = "T2">Time</span><br />\
<span class = "Tb">2000</span><br />\
<span class = "Tb">-</span><span class = "T2">ART JONCTION</span>, Nice (France), ARTFORUM VILKA Gallery, Thessaloniki, <span class = "T2">The Art of Metaphorical Thinking</span>, 1st Version<br />\
<span class = "Tb">2001</span><br />\
<span class = "Tb">-</span><span class = "T2"><a href ="#" id="14_cv">ART JONCTION</a></span>, Nice (France), <span class = "T2">ARTFORUM VILKA Gallery</span>, Thessaloniki, <span class = "T2">The Art of Metaphorical Thinking</span>, 2nd Version<br />\
<br />'
,
'<span class="Tb_14">Posthumously</span><br />\
<br />\
<span class = "Tb">2004</span><br />\
<span class = "Tb">-</span>ART ATHINA, <span class = "T2">ERSI</span> Gallery</span>, Athens, tribute to <span class = "T2">Black Works</span>, in collaboration with the INGE BAECKER Gallery, Cologne, with a special show by Wolf Vostell<br />\
<br />\
<br />'
,
'<span class="Tb_14_cent_shad">SET DESIGN</span><br />\
\
<span class = "Tb">1993</span><br />\
<span class = "T2">Stella Violanti</span> by Grigorios Xenopoulos, directed by Tilemachos MOUDATSAKIS, Heraklion (ViVi Theatre)<br />\
<span class = "Tb">1994</span><br />\
<span class = "T2">The Seagull</span> by A. Chekhov, directed by G. Antonakis in Heraklion, Crete, University of Crete Theatre Company)<br />\
<span class = "Tb">1994</span><br />\
<span class = "T2">Life is a Dream</span> by Calderón de la Barca, directed by Tilemachos MOUDATSAKIS, Heraklion (ViVi Theatre)<br />\
<br />'
,
'<span class="Tb_14_cent_shad">AWARDS</span><br />\
\
<span class = "Tb">1988</span><br />\
<span class = "T2"><a href ="#" id="15_cv">Nikos Kazantzakis Award</a></span> for painting<br />\
<span class = "Tb">1995</span><br />\
Audience Award for painting at <span class = "T2">ART JONCTION</span> International, Cannes, France<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ARTICLES BY THE ARTIST</span><br />\
\
<span class = "Tb">1973</span><br />\
<span class = "T2">Οι νέοι της Πανελληνίου, Ζυγός</span> monthly review (Athens), No. 4, pp. 42-45<br />\
<span class = "Tb">1974</span><br />\
<span class = "T2">Η Τέχνη και η εποχή μας, Επίκαιρα</span> weekly magazine (Athens), September issue<br />\
<span class = "Tb">1979</span> <span class = "T2"><a href ="#" id="16_cv">Απόψεις για το περιεχόμενο και τη λειτουργικότητα της ζωγραφικής Κρήτη</a></span> monthly review (Athens), No. 67, pp.12-13<br />'
+
'<span class = "Tb">1988</span><br />\
<span class = "T2">Συνομιλία και γνωριμία με έναν καθιερωμένο ζωγράφο που ζει και εργάζεται στην Κηφισιά, Θωμάς Παπαδοπεράκης</span> , interview given to the journalist and cartoonist Kostas Vlachos, <span class = "T2">Κηφισσός</span> monthly review (Athens), No. 14, pp. 42-45<br />'
+
'<span class = "Tb">1989</span><br />\
<span class = "T2">Θωμάς Παπαδοπεράκης: Διαπιστώσεις, Αλεξίσφαιρο</span> monthly magazine (Athens), No. 20, with a painting by Thomas Papadoperakis on the cover, pp. 65-67<br />\
<span class = "Tb">1993</span><br />\
<span class = "T2">Η Βυζαντινή Αγιογραφία της Κρητικής Σχολής, Τόλμη</span> daily newspaper (Heraklion), Easter Saturday, April 17, p. 7<br />\
<br />\
<span class = "T2">Η επίσκεψη στο ατελιέ ενός ζωγράφου έχει πάντα ιδιαίτερο ενδιαφέρον και ο τόπος δημιουργίας και έκφρασης ερμηνεύεται από τον ίδιο τον δημιουργό με την αμεσότητα και την ειλικρίνεια που χαρακτηρίζει τους καλλιτέχνες, Κηφισός</span> monthly magazine (Athens), Νο. 48, pp. 28-31<br />\
<span class = "Tb">2000</span><br />\
<span class = "T2">Απόψεις για τον αιώνα που πέρασε και προβλέψεις γι\' αυτόν που ήλθε, Τα Νέα της Τέχνης</span> monthly art newspaper (Athens), November, p. 26<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ESSAYS BY THE ARTIST </span><br />\
\
<span class = "Tb">1995</span><br />\
<span class = "T2">Αντικειμενικότητα στη Ζωγραφική</span><br />\
<span class = "Tb">1998</span> <br />\
<span class = "T2">Four essays:</span><br />\
<span class = "T2">Το μόνο αντικειμενικό στοιχείο στη ζωγραφική είναι η οπτική αρμονία</span><br />\
<span class = "T2">Θέλω να καταστρέψω τη ζωγραφική μου με τα ίδια της τα μέσα</span><br />\
<span class = "T2">Χρόνος</span><br />\
<span class = "T2">Τέχνη του Ζην</span><br />\
<span class = "Tb">1999</span><br />\
<span class = "T2">Μανιφέστο: Η Tέχνη του Ζην</span>, with a foreword by Maurice ELIE, Professor of Aesthetics at the University of Nice <br />\
<span class = "Tb">2001</span><br />\
<span class = "T2">Η Tέχνη του Μεταφορικού Συλλογισμού</span><br />\
<br />'
,
'<span class="Tb_14_cent_shad">REVIEWS OF SOLO EXHIBITIONS</span><br />\
\
<span class = "T2b">ORA Gallery (1974)</span><br />\
Beatrice Spiliadi: <span class = "T2">Καθημερινή</span> newspaper, Arts column (6/10)<br />\
Petros Makris: <span class = "T2">Αθηναϊκή</span> newspaper, Visual Arts column (10/10)<br />\
T. Tsiropoulos: <span class = "T2">Θεσσαλονίκη</span> newspaper (10/10)<br />\
Effie Andreadi: <span class = "T2">Το Βήμα</span> newspaper (10/10)<br />\
Maria Kotzamani: <span class = "T2">Τα Νέα</span> newspaper (31/10)<br />\
<br />\
<span class = "T2b">KREONIDIS Art Gallery (1979)</span><br />\
Kostis Meranaios: <span class = "T2">Νέα Εποχή</span> review, 2nd season, winter 1978-1979 (Athens), pp. 159<br />\
<br />'
+
'<span class = "T2b">Gallery 3 (1989)</span><br />\
Dora Iliopoulou-Rogan: <span class = "T2">Καθημερινή</span> newspaper, "Ανθρώπινες μορφές-συνθέσεις"<br />\
Diana Antonakatou: <span class = "T2">Πολιτικά Θέματα</span> magazine (Athens)<br />\
Maria Marangou: <span class = "T2">Ελευθεροτυπία</span> newspaper, column on the Visual Arts<br />\
Nikos Alexiou: <span class = "T2">Ριζοσπάστης</span> newspaper, "Ταξίδι στα κύματα" p. 20<br />\
<br />'
,
'<span class="Tb_14_cent_shad">SOME SIGNIFICANT YEARS AND DATES</span><br />\
\
<span class = "Tb">1955 </span><br />\
Meets the icon-painter Stelios Kartakis, his first teacher, who introduces him to the rich world of Byzantine art and the discipline of workshop life.<br />\
<br />\
<br />\
During his seven-year stay in Paris, the artist met, among other people, IRIS CLERT and LILA DE NOBILI, as well as ALEXANDER IOLAS, CÉSAR and TÉRIADE (Eleftheriades).<br />\
<br />\
<br />\
<span class = "Tb">1977</span><br />\
Spends approximately a year in Berlin<br />\
<span class = "Tb">1978</span><br />\
Meets his future wife <a href ="#" id="17_cv">Hélène</a> in Athens<br />\
<span class = "Tb">1983</span><br />\
Civil wedding (29/06) and birth of their daughter, Louise (03/07)<br />\
<span class = "Tb">1994</span><br />\
Moves permanently to <a href ="#" id="18_cv">Nice</a>, France (August)<br />\
<span class = "Tb">1998</span><br />\
Beginning of an intense period of theoretical essays on <span class = "T2">The Art of Living</span>, resulting in a manifesto followed by <span class = "T2">The Art of Metaphorical Thinking.</span>' //<br />\
+
'<span class = "Tb">2002</span><br />\
Suffers a <a href ="#" id="19_cv">fatal</a> heart attack (12 September)<br />'
,
'<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
<br />\
The artist\'s works are housed in the <span class = "T2">National Gallery</span> in Athens, as well as various private collections in Greece and abroad, including the famous major <span class = "T2">collection of ÉLIE DE ROTHSCHILD</span> in Paris.<br />\
<br />\
<br />\
<br />\
<br />\
<span style="text-align: center; display:block;" >-----------</span><br />\
'
]

