// in scripts, import me this jQuery way:
// $.getScript("my_lovely_script.js", function(){  })

// HomePage
var language = 'Greek'
var langswaptext = 'En'
var langfulltext = 'glish'

var bannerTxt = './images/banner_text_gr.jpg'
var contribute_link = 'ΣΥΝΤΕΛΕΣΤΕΣ'
var modulesLang = ['Βιογραφικό','Φωτογραφίες','Προσκλήσεις','Έντυπα - Χειρόγραφα'];
var homemodulesLang = ['ΒΙΟΓΡΑΦΙΚΟ','ΦΩΤΟΓΡΑΦΙΕΣ','ΠΡΟΣΚΛΗΣΕΙΣ','ΕΝΤΥΠΑ - ΧΕΙΡΟΓΡΑΦΑ'];
// if matrix size changed, also change in ../index.html { var modules }

var firefoxIsBetter = 'για βελτιστη περιηγηση χρησιμοποιήστε firefox'
//////////////////////////CONTRIBUTORS///////////////////////////
contributors_txt = '<br /> \
<br />\
<span class="T2">Αρχειακό / Φωτογραφικό υλικό</span><br />\
Ασπασία Παπαδοπεράκη, Ελένη Παπαδοπεράκη<br />\
<br />\
<br />\
<span class="T2">Επιμέλεια</span> <br />\
Αγγελική Μπαλτατζή<br />\
<br />\
<br />\
<span class="T2">Μετάφραση</span><br />\
Ρόζμαρι Τζανάκη, Δημήτρης Σαλταμπάσης<br />\
<br />\
<br />\
<span class="T2">Διορθώσεις</span><br />\
Ρόζμαρι Τζανάκι<br />\
<br />\
<br />\
<span class="T2">Ψηφιοποίηση οπτικού υλικού</span><br />\
Devon Laughlin, Κατερίνα Τυλάκη <br />\
<br />\
<br />\
<span class="T2">Υλοποίηση Εφαρμογής</span><br />\
Μανόλης Στρατήγης'

////////////////////////////////////////////////////////////////////////////////////////////////
// image gallery

var galleryLang = ['ΠΑΙΔΙΚH ΗΛΙΚΙΑ', 'ΝΕΑΝΙΚΑ ΧΡΟΝΙΑ', 'ΕΚΘΕΣΕΙΣ', 'ΣΤΙΓΜΕΣ']; 


        var photosAmount =  [4, 7, 6, 9];
        var photoNotesLang = new Array(photosAmount.length);
        photoNotesLang[0] = ['  <span class="Standard"><span class="T1">Στην</span> <span class="T1">αγκαλιά</span>\
  <span class="T1">της</span> <span class="T1">μητέρας</span> <span class="T1">του</span>\
  <span class="T1">και</span> <span class="T1">με</span> <span class="T1">τα</span>\
  <span class="T1">αδέλφια</span> <span class="T1">του</span> <span class=\
  "T1">Γιώργο</span> <span class="T1">και</span> <span class="T1">Ασπασία,</span>\
  <span class="T1">1944</span></span>',
                        '  <span class="Standard"><span class="T1">Από</span> <span class="T1">αριστερά:</span>\
  <span class="T1">Θωμάς,</span> <span class="T1">Ασπασία</span> <span class=\
  "T1">και</span> <span class="T1">Γιώργος</span> <span class="T1">Παπαδοπεράκης,</span>\
  <span class="T1">1947</span></span>',
                        '<span class="Standard"><span class="T1">Δίπλα</span> <span class="T1">στη</span>\
  <span class="T1">μητέρα</span> <span class="T1">του</span> <span class="T1">και</span>\
  <span class="T1">με</span> <span class="T1">τα</span> <span class="T1">αδέλφια</span>\
  <span class="T1">του</span> <span class="T1">Γιώργο</span> <span class="T1">και</span>\
  <span class="T1">Ασπασία,</span> <span class="T1">1949-1950</span></span>',
                        '  <span class="Standard"><span class="T1">Η</span> <span class="T1">οικογένεια</span>\
  <span class="T1">Παπαδοπεράκη,</span> <span class="T1">1950</span></span>'];                        
        photoNotesLang[1] = ['<span class="P5"><span class="T1">Στη</span> <span class="T1">είσοδο</span> <span class=\
  "T1">της</span> <span class="T1">Ανωτάτης</span> <span class="T1">Σχολής</span>\
  <span class="T1">Καλών</span> <span class="T1">Τεχνών,</span> <span class=\
  "T1">δεκαετία</span> <span class="T1">1960</span></span>',
                        '  <span class="Standard"><span class="T1">Δείχνοντας</span> <span class="T1">τη</span>\
  <span class="T1">δουλειά</span> <span class="T1">του</span> <span class=\
  "T1">στον</span> <span class="T1">καθηγητή</span> <span class="T1">του</span>\
  <span class="T1">Κ.</span> <span class="T1">Γραμματόπουλο,</span> <span class=\
  "T1">δεκαετία</span> <span class="T1">1960</span></span>',
                        '<span class="Standard"><span class="T1">Μπροστά</span> <span class="T1">από</span>\
  <span class="T1">ζωγραφική</span> <span class="T1">του</span> <span class=\
  "T1">διακόσμηση</span> <span class="T1">στο</span> <span class="T1">στρατό,</span>\
  <span class="T1">1968</span></span>',
                        ' <span class="Standard"><span class="T1">Παρίσι,</span> <span class="T1">1972</span></span>',
                        '<span class="Standard"><span class="T1">Στο</span> <span class="T1">εργαστήριό</span>\
  <span class="T1">του</span> <span class="T1">στο</span> <span class="T1">Παρίσι</span>\
  <span class="T1">(</span><span class="T1">Rue</span> <span class="T1">de</span>\
  <span class="T1">Rennes</span> <span class="T1">1972-1976)</span></span>',
                        '<span class="Standard"><span class="T1">Παρίσι,</span> <span class="T1">1972</span></span>',
                        '<span class="Standard"><span class="T1">Δεκαετία</span> <span class="T1">1970</span></span>'];                        
        photoNotesLang[2] = ['<span class="P7"><span class="T1">Με</span> <span class="T1">τους</span> <span class=\
  "T1">Γιάννη</span> <span class="T1">Κρεωνίδη,</span> <span class="T1">Γιάννη</span>\
  <span class="T1">Τσαρούχη,</span> <span class="T1">Τάκη</span> <span class=\
  "T1">Σίδερη</span> <span class="T1">στα</span> <span class="T1">εγκαίνια</span>\
  <span class="T1">της</span> <span class="T1">έκθεσης</span> <span class=\
  "T1">τους</span> <span class="T1">στην</span> <span class="T2">Γκαλερί</span>\
  <span class="T2">Κρεωνίδης</span><span class="T1">,</span> <span class=\
  "T1">1986</span></span>',
                        '<span class="P7"><span class="T1">Η</span> <span class="T1">γλύπτρια</span> <span class=\
  "T1">Ασπασία</span> <span class="T1">Παπαδοπεράκη</span> <span class=\
  "T1">(αδελφή</span> <span class="T1">του</span> <span class="T1">Θωμά)</span>\
  <span class="T1">με</span> <span class="T1">τον</span> <span class="T1">καθηγητή</span>\
  <span class="T1">θεατρολογίας</span> <span class="T1">και</span> <span class=\
  "T1">σκηνοθέτη</span> <span class="T1">Τηλέμαχο</span> <span class=\
  "T1">Μουδατσάκη</span> <span class="T1">μπροστά</span> <span class="T1">από</span>\
  <span class="T1">έργο</span> <span class="T1">του</span> <span class="T1">Θωμά</span>\
  <span class="T1">Παπαδοπεράκη.</span> <span class="T1">Αίθουσα</span> <span class=\
  "T2">Ναυτίλος</span><span class="T1">,</span> <span class="T1">1990</span></span>',
                        '<span class="P7"><span class="T1">Με</span> <span class="T1">την</span> <span class=\
  "T1">κόρη</span> <span class="T1">του</span> <span class="T1">Λουίζ</span> <span class=\
  "T1">στη</span> <span class="T1">φουάρ</span> <span class="T2">ARTJonction</span>\
  <span class="T2">98&nbsp;</span><span class="T1">στη</span> <span class=\
  "T1">Νίκαια</span></span>',
                        '<span class="P7"><span class="T2">Η</span> <span class="T2">Τέχνη</span> <span class=\
  "T2">του</span> <span class="T2">Ζην</span> <span class="T1">στην</span> <span class=\
  "T2">Γκαλερί</span> <span class="T2">Βίλκα</span><span class="T1">,</span> <span class=\
  "T1">Θεσσαλονίκη,</span> <span class="T1">1999</span></span>',
                        '<span class="P7"><span class="T2">Η</span> <span class="T2">Τέχνη</span> <span class=\
  "T2">του</span> <span class="T2">Ζην</span> <span class="T1">στην</span> <span class=\
  "T2">Γκαλερί</span> <span class="T2">Βίλκα</span><span class="T1">,</span> <span class=\
  "T1">Θεσσαλονίκη,</span> <span class="T1">1999</span></span>',
                        '<span class="P7"><span class="T1">Mε</span> <span class="T1">τον</span> <span class=\
  "T1">ιστορικό</span> <span class="T1">τέχνης</span> <span class="T1">Enrico</span>\
  <span class="T1">Pedrini</span> <span class="T1">στη</span> <span class=\
  "T1">φουάρ</span> <span class="T2">ARTJonction</span> <span class="T2">01</span>\
  <span class="T1">στη</span> <span class="T1">Νίκαια</span></span>'];                        
        photoNotesLang[3] = ['<span class="P7"><span class="T1">Συνάδελφοι</span> <span class=\
  "T1">καλλιτέχνες</span><br /></span>\
\
  <span class="P7"><span class="T1"> Από</span> <span class="T1">αριστερά:</span>\
  <span class="T1">Γεώργιος</span> <span class="T1">Γεωργιάδης</span> <span class=\
  "T1">(γλύπτης),</span> <span class="T1">Σπύρος</span> <span class="T1">Κούρσαρης</span>\
  <span class="T1">(ζωγράφος),</span> <span class="T1">Στέφανος</span> <span class=\
  "T1">Δασκαλάκης</span> <span class="T1">(ζωγράφος),</span> <span class=\
  "T1">Πέτρος</span> <span class="T1">Ζουμπουλάκης</span> <span class=\
  "T1">(ζωγράφος),</span> <span class="T1">Δημήτρης</span> <span class=\
  "T1">Αρμακόλας</span> <span class="T1">(γλύπτης),</span> <span class=\
  "T1">Βαγγέλης</span> <span class="T1">Μουστάκας</span> <span class=\
  "T1">(γλύπτης),</span> <span class="T1">Σταύρος</span> <span class=\
  "T1">Κατσιρέας</span> <span class="T1">(ζωγράφος),</span> <span class=\
  "T1">Θεόδωρος</span> <span class="T1">Παπαγιάννης</span> <span class=\
  "T1">(γλύπτης),</span> <span class="T1">Θωμάς</span> <span class=\
  "T1">Παπαδοπεράκης</span> <span class="T1">και</span> <span class="T1">Αντώνης</span>\
  <span class="T1">Απέργης</span> <span class="T1">(ζωγράφος)</span></span>',
                        '<span class="P7"><span class="T1">Στο</span> <span class="T1">εργαστήριο</span>\
  <span class="T1">του</span> <span class="T1">ζωγράφου</span> <span class=\
  "T1">Πέτρου</span> <span class="T1">Ζουμπουλάκη</span></span>\
\
  <span class="P7"><span class="T1">Από</span> <span class="T1">αριστερά:</span>\
  <span class="T1">Σόνια</span> <span class="T1">Βασιλάκη,</span> <span class=\
  "T1">Θωμάς</span> <span class="T1">Παπαδοπεράκης,</span> <span class=\
  "T1">Ασπασία</span> <span class="T1">Παπαδοπεράκη</span> <span class=\
  "T1">(γλύπτρια</span> <span class="T1">και</span> <span class="T1">αδελφή</span>\
  <span class="T1">του</span> <span class="T1">Θωμά),</span> <span class="T1">Άρια</span>\
  <span class="T1">Κομιανού</span> <span class="T1">(χαράκτρια)</span></span>',
                        '<span class="P7"><span class="T1">Στην</span> <span class="T1">ονομαστική</span>\
  <span class="T1">γιορτή</span> <span class="T1">του</span> <span class="T1">Θωμά</span>\
  <span class="T1">Παπαδοπεράκη</span> <span class="T1">στο</span> <span class=\
  "T1">σπίτι</span> <span class="T1">του</span> <span class="T1">στη</span> <span class=\
  "T1">Λυκόβρυση</span> <span class="T1">το</span> <span class="T1">1983,</span>\
  <span class="T1">με</span> <span class="T1">συγγενείς,</span> <span class=\
  "T1">φίλους,</span> <span class="T1">καλλιτέχνες</span> <span class="T1">και</span>\
  <span class="T1">τον</span> <span class="T1">Γιάννη</span> <span class=\
  "T1">Τσαρούχη</span></span>',
                        '<span class="P7"><span class="T1">Τα</span> <span class="T1">αδέλφια</span> <span class=\
  "T1">(Θωμάς,</span> <span class="T1">Γιάννης,</span> <span class="T1">Ασπασία,</span>\
  <span class="T1">Γιώργος)</span> <span class="T1">Παπαδοπεράκη,</span> <span class=\
  "T1">από</span> <span class="T1">έκθεση</span> <span class="T1">γλυπτικής</span>\
  <span class="T1">(</span><span class="T2">Μαρία Κάλλας</span><span class="T1">)</span>\
  <span class="T1">της</span> <span class="T1">Ασπασίας</span> <span class=\
  "T1">Παπαδοπεράκη.</span> <span class="st"><span class="T1">Ινστιτούτο</span></span>\
  <span class="T2">Goethe</span><span class="T1">,</span> <span class=\
  "T1">1985</span></span>',
                        '<span class="P7"><span class="T1">Γεύμα</span> <span class="T1">μετά</span> <span class=\
  "T1">από</span> <span class="T1">την</span> <span class="T1">απονομή</span>\
  <span class="T1">του</span> <span class="T1">βραβείου</span> <span class=\
  "T2">Νίκος</span> <span class="T2">Καζαντζάκης</span><span class="T1">,</span>\
  <span class="T1">ανάμεσα</span> <span class="T1">στον</span> <span class=\
  "T1">τέως</span> <span class="T1">δήμαρχο</span> <span class="T1">Ηρακλείου</span>\
  <span class="T1">Μανόλη</span> <span class="T1">Καρέλλη</span> <span class=\
  "T1">και</span> <span class="T1">τη</span> <span class="T1">σύζυγό</span> <span class=\
  "T1">του,</span> <span class="T1">1988</span></span>',
                        '<span class="P7"><span class="T1">Δουλεύοντας</span> <span class="T1">μια</span>\
  <span class="T1">νεκρή</span> <span class="T1">φύση</span> <span class="T1">στη</span>\
  <span class="T1">σπηλιά</span> <span class="T1">(Σπήλια Ηρακλείου)</span></span>',
                        '<span class="P7"><span class="T1">Στο</span> <span class="T1">εργαστήριό</span>\
  <span class="T1">του</span> <span class="T1">στη</span> <span class="T1">Νίκαια</span>\
  <span class="T1">μπροστά</span> <span class="T1">από</span> <span class=\
  "T1">έργο</span> <span class="T1">του</span> <span class="T1">με</span> <span class=\
  "T1">θέμα</span> <span class="T1">τα</span> <span class="T1">ανατολίτικα</span>\
  <span class="T1">όργανα,</span> <span class="T1">1995</span></span>',
                        '<span class="P7"><span class="T1">Βράβευση</span> <span class="T1">των</span> <span class=\
  "T1">αδελφών</span> <span class="T1">Παπαδοπεράκη</span> <span class="T1">από</span>\
  <span class="T1">το</span> <span class="T1">Σύλλογο</span> <span class=\
  "T1">Κισσαμιτών</span> <span class="T1">Χανίων,</span> <span class="T1">καταγωγή</span>\
  <span class="T1">των</span> <span class="T1">γονέων</span> <span class=\
  "T1">τους</span></span>',
                        '<span class="P7"><span class="T1">Με</span> <span class="T1">τη</span> <span class=\
  "T1">σύζυγό</span> <span class="T1">του</span> <span class="T1">Ελένη,</span>\
  <span class="T1">Νίκαια</span> <span class="T1">8-9-2002</span></span>'];

//////////////////////////////////////////////////////////////////////////////////////////////
//  Invitation Buttons

var invAmount = 11;
var invNotes = new Array(invAmount)
invNotes[0] = 
  '<span class="T2">Γκαλερί</span> <span class="T2">Ζαλοκώστα\
  7</span><span class="T1">, 1985 (Αθήνα)</span>'
  
invNotes[1] =   
   '<span class="T2">Αίθουσα Τέχνης</span> <span class=\
  "T2">Εποχές</span><span class="T1">, 1986 (Αθήνα)</span>'
    
invNotes[2] =     
  '<span class="T2">Γκαλερί</span> <span class=\
  "T2">Κρεωνίδης</span><span class="T1">, 1986 (Αθήνα)</span>'
   
invNotes[3] =    
  '<span class="T2">Γκαλερί 3</span><span class="T1">, 1989\
  (Αθήνα)</span>'
  
invNotes[4] =   
  '<span class="T2">Αίθουσα Τέχνης</span> <span class=\
  "T2">Εποχές</span><span class="T1">, 1989 (Αθήνα)</span>'

  
invNotes[5] =   
  '<span class="T1">Αίθουσα</span> <span class=\
  "T2">Ναυτίλος</span><span class="T1">, 1990 (Ηράκλειο)</span>'
  
invNotes[6] = 
  '<span class="T1">Διεθνές Κέντρο Εικαστικών Τεχνών</span>\
  <span class="T2">Αέναον</span><span class="T1">, 1990 (Αθήνα)</span>'
  
invNotes[7] =   
  '<span class="T1">Συνάντηση Σύγχρονης Τέχνης</span>\
  <span class="T1">Art</span><span class="T1">Athina</span><span class="T1">4</span><span class="T1">, 1996 (Αθήνα)</span>'
  
invNotes[8] = 
 '<span class="T1">Art</span><span class=\
  "Strong_20_Emphasis"><span class="T1">&nbsp;</span></span><span class=\
  "Strong_20_Emphasis"><span class="T1">F</span></span><span class=\
  "Strong_20_Emphasis"><span class="T1">orum</span></span> <span class=\
  "Strong_20_Emphasis"><span class="T1">/</span></span> <span class=\
  "Strong_20_Emphasis"><span class="T1">Γκαλερί Βίλκα</span></span><span class=\
  "Strong_20_Emphasis"><span class="T1">, 1999 (Θεσσαλονίκη)</span></span>'
  
invNotes[9] =   
  'Πνευματικό Κέντρο Δήμου\
  Λυκόβρυσης, 2001 (Αττική)'
  
invNotes[10] = 
  '<span class=\
  "Strong_20_Emphasis"><span class="T1">Συνάντηση Σύγχρονης Τέχνης</span></span>\
  <span class="Strong_20_Emphasis"><span class="T1">Art</span></span> <span class=\
  "Strong_20_Emphasis"><span class="T1">Athina</span></span><span class=\
  "Strong_20_Emphasis"><span class="T1">, 2004 (Αθήνα)</span></span>'


/////////////////////////////////Press//////////////////////////////////////////////
pressNotes = new Array(10)
pressNotes = [
    'Εξώφυλλο του καταλόγου της έκθεσης του Θωμά Παπαδοπεράκη στη <span style="font-style: italic;">Galerie 3</span>, 1989',
    'Κείμενο του Θωμά Παπαδοπεράκη, <span style="font-style: italic;">Απόψεις για το περιεχόμενο και τη λειτουργικότητα της ζωγραφικής</span>, Μηνιαίο περιοδικό ΚΡΗΤΗ (Αθήνα) Τεύχος 67, στήλη Εικαστικά, σελ.12 και 13, 1979',
    'Καρτ - ποστάλ <span style="font-style: italic;">Destruction</span>, ομαδική έκθεση L’Art et l’Euro, Νίκαια (Γαλλία), 2002',
    'Οπισθόφυλλο από φυλλάδιο της <span style="font-style: italic;">Gallerie KARGADOS</span>. Ομαδική έκθεση με την συμμετοχή του Θωμά Παπαδοπεράκη (ζωγραφική) και της αδελφής του Ασπασίας Παπαδοπεράκη (γλυπτική). Tiengen (Γερμανία), 1990',
    'Εξώφυλλο της έκδοσης <span style="font-style: italic;">Μπετόν Αγγέλου</span> της Αθηνάς Καραταράκη με έργο του Θωμά Παπαδοπεράκη. Θέμα ζωγραφισμένο από το φωτογραφικό βιβλίο του Νίκου Παναγιωτόπουλου, <span style="font-style: italic;">Άσυλο: Ψυχιατρικό Ίδρυμα Λέρου</span>,1982',
    'Ευχετήρια κάρτα φροντισμένη από τον Θωμά Παπαδοπεράκη προς την αδελφή του Ασπασία, όταν υπηρετούσε στον στρατό (1967)',
    'Χειρόγραφο βιογραφικό σημείωμα από τον Θωμά Παπαδοπεράκη',
    'Γράμμα του Θωμά Παπαδοπεράκη προς την αδελφή του Sosó (Ασπασία Παπαδοπεράκη), Παρίσι, 11-5-1970',
    'Θωμάς Παπαδοπεράκης (1943-2002): στοχαστής και ζωγράφος. Δημοσίευμα της Ντόρας Ηλιοπούλου Ρογκάν στη μνήμη του Θωμά Παπαδοπεράκη. Ηλεκτρονική εφημερίδα <span style="font-style: italic;">ΤΑ ΝΕΑ ΤΗΣ ΤΕΧΝΗΣ,</span> Νο 1, 2003',
    'Δημοσίευμα στην εφημερίδα <span style="font-style: italic;">ΤΟΛΜΗ</span> (24 Σεπτεμβρίου 2006) για το <span style="font-style: italic;">Σπίτι Μνήμης στην Άνδρο</span>, ένα χώρο αφιερωμένο στη μνήμη του Θωμά Παπαδοπεράκη, μια πρωτοβουλία της αδελφής του ζωγράφου, της γλύπτριας Ασπασίας Παπαδοπεράκη'
    ]

/////////////////////////////////////////////////////////////////////////////////////
// CV
//CV_url = new Array();
//for (i=0; i<=16; i++) {
//      CV_url[i] = './CV/CVgr/CVgr-' + i + '.png';
//}   

var cv_linklez = new Array();
cv_linklez = [
    pressNotes[6]
    ,photoNotesLang[0][0]
    ,photoNotesLang[1][0]
    ,photoNotesLang[1][1]
    ,photoNotesLang[1][3]
    ,photoNotesLang[3][2]
    ,photoNotesLang[3][4]  //null
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
    
// %s:\n:<br />\\\r:g    vim regular expressions add br,\ at end of line

CV_text = new Array();
CV_text = [
'<span class="Tb_14_cent">Θωμάς ΠΑΠΑΔΟΠΕΡΑΚΗΣ <br />\
Ζωγράφος – Χαράκτης</span><br />\
<br />\
<span class="Tb_14_cent_shad"><a class="card" href ="#" id="0_cv">ΒΙΟΓΡΑΦΙΚΟ ΣΗΜΕΙΩΜΑ</a></span><br />\
<br />\
<a href ="#" id="1_cv">Γεννήθηκε</a> το 1943 στα Σπήλια Ηρακλείου Κρήτης.<br />\
<br />\
<span class="Tb_14_cent_shad">ΣΠΟΥΔΕΣ</span><br />\
\
<span class="Tbu">ΗΡΑΚΛΕΙΟ 1955 - 1960</span><br />\
<br />\
Παρακολουθεί την τεχνική της Βυζαντινής Αγιογραφίας (Κρητική Σχολή) κοντά στον Στυλιανό ΚΑΡΤΑΚΗ, κάνοντας και τα πρώτα μαθήματα σχεδίου (παράλληλα με τις γυμνασιακές του σπουδές). Το 1960 εκτελεί την προτομή του Νίκου ΚΑΖΑΝΤΖΑΚΗ, η οποία βρίσκεται στο ομώνυμο μουσείο. <br />\
<br />\
<span class="Tbu">ΑΘΗΝΑ 1960 - 1970</span><br />\
<br />\
<span class="Tb">1960 - 1961</span><br />\
Παρακολουθεί σχέδιο στο φροντιστήριο με δάσκαλο τον Θεόδωρο ΔΡΟΣΟ.<br />\
<span class="Tb">1961</span><br />\
Εισάγεται (πρώτος) στο προκαταρκτικό τμήμα της <a href ="#" id="2_cv">Ανωτάτης Σχολής Καλών Τεχνών (Α.Σ.Κ.Τ.)</a> με δάσκαλο τον Γεώργιο ΜΑΥΡΟΪΔΗ.<br />\
<span class="Tb">1962</span><br />\
Εισάγεται (πρώτος) στο εργαστήριο ζωγραφικής και (πρώτος) στο εργαστήριο χαρακτικής, το οποίο επιλέγει, με δάσκαλο τον <a href ="#" id="3_cv">Κων/νο ΓΡΑΜΜΑΤΟΠΟΥΛΟ</a> (υποτροφία του Ιδρύματος Κρατικών Υποτροφιών – Ι.Κ.Υ).'
+
' Παράλληλα διδάσκεται και από τον ζωγράφο Γιάννη ΤΣΑΡΟΥΧΗ. Το 1964 στην επέτειο των 350 ετών από'
,
'τον θάνατο του EL GRECO, εκτελεί μαζί με τον Γιάννη ΤΣΑΡΟΥΧΗ αντίγραφα, φυσικού μεγέθους, έργων του EL GRECO  για το ομώνυμο θεατρικό έργο που ανεβάστηκε στο Ηράκλειο Κρήτης από τον Μάνο ΚΑΤΡΑΚΗ.<br />\
<span class="Tb">1965</span><br />\
Εγγράφεται στο εργαστήριο σκηνογραφίας με δάσκαλο τον Βασίλειο ΒΑΣΙΛΕΙΑΔΗ και την ίδια χρονιά εκτελεί τρία αντίγραφα έργων του BOTΤICELLI, φυσικών διαστάσεων, για το έργο του Παντελή ΠΡΕΒΕΛΑΚΗ  <span class="T2">Ιερό Σφαγείο</span> στο Εθνικό Θέατρο, με σκηνογραφία του Β. ΒΑΣΙΛΕΙΑΔΗ.<br />\
<span class="Tb">1966</span> <br />\
Δίπλωμα χαρακτικής και θεωρητικών σπουδών της Α.Σ.Κ.Τ. με δύο διακρίσεις γυμνού νυκτός και ένα έπαινο σύνθεσης ξυλογραφίας.<br />\
<span class="Tb">1969</span> <br />\
Δίπλωμα σκηνογραφίας της Α.Σ.Κ.Τ. με έπαινο αφίσας.<br />\
<br />\
<span class="Tbu"><a href ="#" id="4_cv">ΠΑΡΙΣΙ 1970 - 1977</a></span><br />\
<br />\
<span class="Tb">1970</span> <br />\
Εισάγεται στο εργαστήριο ζωγραφικής της <span class="T2">Έcole Nationale Supérieure des Beaux-Arts</span> (ENSB-A) με δάσκαλο τον Gustave SINGIER.<br />\
<span class="Tb">1974</span><br />\
Κερδίζει τριετή υποτροφία από την Ε.Ο.Ε.Χ. για κεραμική στην Ε.Ν.S.B.A. του Παρισιού.<br />\
<span class="Tb">1976</span><br />\
Δίπλωμα ζωγραφικής της Ε.Ν.S.B.A. Παρισιού με βραβείο (Mention Bien).\
<br />\
<br />\
<br />\
Στη διάρκεια της επταετούς διαμονής του στο Παρίσι βρίσκεται σε τακτική συνάντηση με τον <a href ="#" id="5_cv">Γιάννη ΤΣΑΡΟΥΧΗ</a>, ο οποίος τον βοηθάει πάνω στο ζωγραφικό του προβληματισμό.</p>'
,
'<span class="Tb_14_cent_shad">ΕΚΘΕΣΕΙΣ</span><br />\
\
<span class="Tb">ΑΤΟΜΙΚΕΣ ΕΚΘΕΣΕΙΣ</span><br />\
<br />\
<span class="Tb">1968</span><br />\
-Σέρρες, Επιμελητήριο Σερρών <br />\
<span class="Tb">1974</span>	<br />\
-Αθήνα, <span class="T2">Γκαλερί ΩΡΑ</span><br />\
<span class="Tb">1979</span>	<br />\
-Αθήνα, <span class="T2">Γκαλερί ΚΡΕΩΝΙΔΗΣ</span><br />\
<span class="Tb">1988</span><br />\
-Ηράκλειο, Βασιλική Αγ. Μάρκου για το βραβείο <span class="T2">Νίκος ΚΑΖΑΝΤΖΑΚΗΣ </span>(με τον γλύπτη Μ. Τζομπανάκη) <br />\
<span class="Tb">1989</span>	<br />\
-Αθήνα, <span class="T2"><a href ="#" id="7_cv">Γκαλερί 3</a></span><br />\
-Θεσσαλονίκη, <span class="T2">Γκαλερί ARTFORUM</span><br />\
<span class="Tb">1990</span><br />\
-Hράκλειο, Βιβλιοπωλείο <span class="T2"><a href ="#" id="8_cv">ΝΑΥΤΙΛΟΣ</a></span>, αφιερωμένη στον EL GRECO επ΄ευκαιρία της μεγάλης έκθεσής του, που πραγματοποιήθηκε στο Ηράκλειο Κρήτης το καλοκαίρι του 1990, για την επέτειο των 450 ετών από τη γέννησή του<br />\
<span class="Tb">1995</span><br />\
-Νίκαια (Γαλλία), Ασφαλιστική Εταιρεία <span class="T2">ALLIANZ VIA</span> της J. Guillot.<br />\
-Νίκαια (Γαλλία), <span class="T2">Maison des Artistes Nice Côte d’Azur</span> <br />\
<span class="Tb">1996</span><br />\
-Villefranche s/Mer, Chapelle Ste Elisabeth <span class="T2">L’ Ete Grec</span>, οργανωμένη από το Ελληνικό Προξενείο Νίκαιας (14/6-15/7) <br />\
-Nίκαια (Γαλλία), Διεθνής ΄Εκθεση Καλλιτεχνών <span class="T2">DIRECT ART</span> (22/9- 2/10)<br />\
-St-Laurent-du-Var (Γαλλία), Διαφημιστική Εταιρεία <span class="T2">CANICULE</span> ετήσια έκθεση <span class="T2">Παρενθέσεις</span> με τον γλύπτη G. Sassier<br />'
,
'<span class="Tb">1999</span><br />-Νίκαια (Γαλλία), Γκαλερί <span class="T2">SAINTE REPARATE</span> οργανωμένη από το Δήμο Νίκαιας <span class="T2">Manifeste : L’ Art de la Vie</span> (9/4-29/5)<br />\
-Θεσσαλονίκη, Γκαλερί <span class="T2">ARTFORUM</span>, <span class="T2"><a href ="#" id="9_cv">H Tέχνη του Ζην</a></span> (Νοέμβριος)<br />\
<span class="Tb">2001</span><br />\
-Λυκόβρυση-Αττικής, Πνευματικό Κέντρο του Δήμου, <span class="T2"><a class="card" href ="#" id="10_cv">Σύντομη Αναδρομή</a></span> <br />\
(4-21/10)<br />\
<br />\
<span class="Tb_14">OMAΔΙΚΕΣ ΕΚΘΕΣΕΙΣ</span><span class="Tb">(επιλογή)</span><br />\
<br />\
<span class="Tb">ΕΛΛΑΔΑ</span><br />\
<br />\
<span class="Tb">1964 </span><br />\
-Αθήνα, Γ΄ Πανελλαδική Έκθεση Νέων<br />\
<span class="Tb">1969</span> <br />\
-10η Πανελλήνιος<br />\
<span class="Tb">1971</span><br />\
-11η Πανελλήνιος<br />\
<span class="Tb">1973</span><br />\
-12η Πανελλήνιος<br />\
<span class="Tb">1975</span><br />\
-13η Πανελλήνιος<br />\
<span class="Tb">1987</span><br />\
-14η Πανελλήνιος<br />\
<span class="Tb">1972</span><br />\
-1η Παγκρήτιος στα Χανιά Κρήτης<br />\
<span class="Tb">1974</span><br />\
-2η Παγκρήτιος στα Χανιά Κρήτης<br />\
<span class="Tb">1976</span><br />\
3η Παγκρήτιος στα Χανιά Κρήτης'//<br />
,
'<span class="Tb">1976</span><br />-Αθήνα, ΕΘΝΙΚΗ ΠΙΝΑΚΟΘΗΚΗ, <span class="T2">Πανόραμα 50 ετών Ελληνικής Ζωγραφικής</span> οργανωμένη από την <span class="T2">Εθνική Πινακοθήκη</span> Αθηνών<br />\
<span class="Tb">1983</span><br />\
-Αθήνα, ΕΘΝΙΚΗ ΠΙΝΑΚΟΘΗΚΗ, <span class="T2">Σύγχρονες Τάσεις της Ελληνικής Ζωγραφικής</span> οργανωμένη από την Εθνική Πινακοθήκη Αθηνών<br />\
<span class="Tb">1986</span><br />\
-Αθήνα, <a href ="#" id="11_cv">Γκαλερί <span class="T2">ΚΡΕΩΝΙΔΗΣ</span></a> με τους Γιάννη Τσαρούχη και Τάκη Σιδέρη 1986 -Κηφισιά, Γκαλερί <span class="T2">TΡΙΓΩΝΟ</span> με τους Γιάννη Τσαρούχη και Τάκη Σιδέρη<br />\
<span class="Tb">1998</span><br />\
-Ρέθυμνο, <span class="T2">ΚΕΝΤΡΟ ΣΥΓΧΡΟΝΗΣ ΤΕΧΝΗΣ, Με τη Λύρα και το Δοξάρι</span><br />\
<br />\
<span class="Tb_14">Μετά θανάτου</span><br />\
<br />\
<span class="Tb">2007</span><br />\
-Βώροι, Κρήτη, Κεντρο ερευνων του ΜουσεΙο ΚρητιΚΗς ΕθνολογΙας <span class="T2">Δημιουργοί Ανατολικής Κρήτης 1930-2007</span> (7-21/09)<br />\
<span class="Tb">2009</span><br />\
-Αθήνα, Τεχνόπολης του Δήμου Αθηναίων (Γκάζι), <span class="T2">Η ανθρώπινη μόρφη στην τέχνη</span>(21/12 - 24/01/2010)<br />\
<br />\
<span class="Tb_14">EΞΩΤΕΡΙΚΟ</span><br />\
<br />\
<span class="Tb">1973</span><br />\
-Τoυλόν (Γαλλία), 23η Διεθνής Έκθεση <span class="T2">Festival de Toulon</span><br />\
<span class="Tb">1975</span><br />\
<span class="Tb">-</span>Παρίσι (Γαλλία), 1η Έκθεση Νέων Ελλήνων Καλλιτεχνών<br />\
<span class="Tb">1977</span><br />\
<span class="Tb">-</span>Παρίσι (Γαλλία), Διεθνής Έκθεση Πορτραίτου Paul-Louis Weiller <br />\
-Noρμανδία (Γαλλία), <span class="T2">VIe Salon de la Côte d’Albâtre</span><br />'
,
'<span class="Tb">1978</span><br />\
-Λευκωσία (Κύπρος), <span class="T2">Σύγχρονοι Έλληνες Ζωγράφοι</span> οργανωμένη από την Εθνική Πινακοθήκη Αθηνών<br />\
<span class="Tb">1979</span><br />\
-Δουβλίνο (Ιρλανδία), <span class="T2">Σύγχρονοι Έλληνες Ζωγράφοι</span> oργανωμένη από την     Εθνική Πινακοθήκη Αθηνών<br />\
<span class="Tb">1980</span><br />\
<span class="Tb">-</span>Βουκουρέστι (Ρουμανία), Πανβαλκανική Έκθεση (<span class="Tb">Eιδική διάκριση</span>) οργανωμένη από το Υπουργείο Πολιτισμού και Επιστημών<br />\
<span class="Tb">1983</span><br />\
<span class="Tb">-</span>Αλγέρι (Αλγερία), Έκθεση Μεσογειακών Χωρών οργανωμένη από το Δήμο                 Αθηναίων για την Ελληνική συμμετοχή<br />\
<span class="Tb">1988</span><br />\
<span class="Tb">-</span>Βρυξέλλες (Βέλγιο), Ελληνική Ζωγραφική 1968-88 οργανωμένη από την Εθνική Πινακοθήκη Αθηνών στους χώρους της Κομισιόν και της Γραμματείας του Συμβουλίου των Υπουργών των Ευρωπαϊκών Κοινοτήτων<br />\
<span class="Tb">1995</span><br />\
-Beaulieu-sur-Mer (Γαλλία), <span class="T2">Festival des Arts</span> υπό την αιγίδα του Δήμου<br />\
<span class="Tb">1999</span><br />\
-Μονακό, <span class="T2">Prix International d’Art Contemporain</span> ετήσια έκθεση οργανωμένη από το Πριγκιπάτο όπου εκπροσώπησε την Ελλάδα<br />\
<br />\
<span class="Tb_14">Μετά θανάτου</span><br />\
<br />\
<span class="Tb">2002</span><br />\
<span class="Tb">-</span>Νίκαια (Γαλλία), <a class="card" href ="#" id="12_cv">L’Art et l’Euro</a> οργανωμένη από την Τράπεζα <br />\
Caisse d’Epargne Côte d’Azur<br />\
<span class="Tb">2003</span><br />\
<span class="Tb">-</span>Cagnes-sur-Mer (Γαλλία), στην Maison des Artistes, Correspondances με το σύλλογο καλλιτεχνών Coop’Art (07-23/06)'//  <br />
,
'-Cagnes-sur-Mer (Γαλλία), <span class="T2">Château-Musée Grimaldi, Πορτραίτα</span> της συλλογής André Verdet (13/12-22/04/04)<br />\
<span class="Tb">2006</span><br />\
<span class="Tb">-</span>Carros (Γαλλία), Διεθνές Κέντρο Σύγχρονης Τέχνης, συλλογή André Verdet (καλοκαίρι)<br />\
<span class="Tb">2012</span><br />\
<span class="Tb">-</span>Carros (Γαλλία), Διεθνές Κέντρο Σύγχρονης Τέχνης, συλλογή André Verdet σε αφιερωμένη αίθουσα στη συλλογή του<br />\
<br />\
<span class="Tb_14">ΦΟΥΑΡ (Ατομικές Παρουσιάσεις)</span><br />\
<br />\
<span class="Tb">1995</span><br />\
<span class="Tb">-</span>ART JONCTION, Κάννες (Γαλλία), Γκαλερί ARTFORUM Θεσ/νίκης  <br />\
<span class="Tb">1996</span><br />\
-<span class="T2">ART ΑΘΗΝΑ</span>, Γκαλερί <span class="T2">ΑΡΙΑΔΝΗ</span> Ηράκλειο Κρήτης (με την γλύπτρια Ασπασία Παπαδοπεράκη)<br />\
<span class="Tb">1998</span><br />\
<span class="Tb">-</span><a href ="#" id="13_cv">ART JONCTION</a>, Νίκαια (Γαλλία), Γκαλερί ARTFORUM VILKA                Θεσ/νίκης με θέμα Xρόνος<br />\
<span class="Tb">2000</span><br />\
<span class="Tb">-</span>ART JONCTION, Νίκαια (Γαλλία), Γκαλερί ARTFORUM VILKA                Θεσ/νίκης με θέμα Η Τέχνη του Μεταφορικού Συλλογισμού, Α’ Εκδοχή<br />\
<span class="Tb">2001</span><br />\
<span class="Tb">-</span><a href ="#" id="14_cv">ART JONCTION</a>, Νίκαια (Γαλλία), Γκαλερί ARTFORUM VILKA                Θεσ/νίκης με θέμα Η Τέχνη του Μεταφορικού Συλλογισμού, Β’ Εκδοχή<br />\
<br />'
,
'<span class="T2b_14">Μετά θανάτου</span><br />\
<br />\
<span class="Tb">2004</span><br />\
-ART ΑΘΗΝΑ, <span class="T2">Γκαλερί ΕΡΣΗ</span>, Αθήνα, Τιμητικό αφιέρωμα με θέμα <span class="T2">Μαυρισμένα'
+
' έργα</span> σε συνεργασία με την <span class="T2">Γκαλερί ΙNGE BAECKER</span> της Κολωνίας με τιμητική παρουσίαση του Wolf Vostell<br />\
<br />'
, 
'<span class="Tb_14_cent_shad">ΣΚΗΝΙΚΑ ΘΕΑΤΡΟΥ</span><br />\
\
<span class="Tb">1993</span><br />\
<span class="T2">Στέλλα Βιολάντη</span> του Γρ. ΞΕΝΟΠΟΥΛΟΥ, σκηνοθεσίας Τηλέμαχου               ΜΟΥΔΑΤΣΑΚΗ στο Ηράκλειο Κρήτης (θέατρο των <span class="T2">ViVi</span>)<br />\
<span class="Tb">1994</span><br />\
<span class="T2">Ο Γλάρος</span> του Α. ΤΣΕΧΩΦ, σκηνοθεσίας Γ. ΑΝΤΩΝΑΚΗ στο Ηράκλειο Κρήτης (θεατρική ομάδα Πανεπιστημίου Κρήτης)<br />\
<span class="Tb">1994</span><br />\
<span class="T2">Η Ζωή Είναι ’Όνειρο</span> του ΚΑΛΝΤΕΡΟΝ ΝΤΕ ΛΑ ΒΑΡΚΑ, σκηνοθεσίας Τηλέμαχου ΜΟΥΔΑΤΣΑΚΗ στο Ηράκλειο Κρήτης (θέατρο των <span class="T2">ViVi</span>)<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ΒΡΑΒΕΙΑ</span><br />\
\
<span class="Tb">1988</span><br />\
Βραβείο <span class="T2"><a href ="#" id="15_cv">ΝΙΚΟΣ ΚΑΖΑΝΤΖΑΚΗΣ</a></span> για τη ζωγραφική<br />\
<span class="Tb">1995</span><br />\
Βραβείο κοινού για τη ζωγραφική στη Διεθνή Έκθεση Αγοράς Σύγχρονης                Τέχνης <span class="T2">ART JONCTION</span> στις Κάννες <br />\
<br />'
,
'<span class="Tb_14_cent_shad">ΚΕΙΜΕΝΑ ΤΟΥ ΚΑΛΛΙΤΕΧΝΗ</span> \
\
<span class="Tb">1973</span><br />\
<span class="T2">Οι νέοι της Πανελληνίου</span>, μηνιαίο περιοδικό <span class="T2">ΖΥΓΟΣ</span> (Αθήνα) Τεύχος 4,                 σελ. 42, 43,44 και 45<br />\
<span class="Tb">1974</span><br />\
<span class="T2">Η Τέχνη και η εποχή μας</span> Εβδομαδιαίο περιοδικό <span class="T2">ΕΠΙΚΑΙΡΑ</span> (Αθήνα)                 στήλη <span class="T2">Εικαστικά</span>, Σεπτέμβριος<br />\
<span class="Tb">1979</span><br />\
<span class="T2"><a href ="#" id="16_cv">Απόψεις για το περιεχόμενο και τη λειτουργικότητα της ζωγραφικής</a></span>. Μηνιαίο'
+
' περιοδικό <span class="T2">ΚΡΗΤΗ</span> (Αθήνα) Τεύχος 67, στήλη Εικαστικά, σελ.12 και 13<br />\
<span class="Tb">1988</span><br />\
<span class="T2">Συνομιλία και γνωριμία με ένα καθιερωμένο ζωγράφο που ζει και εργάζεται στην Κηφισιά, Θωμάς Παπαδοπεράκης</span>, συνέντευξη με το δημοσιογράφο και   γελοιογράφο Κώστα Βλάχο, μηνιαίο περιοδικό <span class="T2">ΚΗΦΙΣΟΣ</span> (Αθήνα) Τεύχος 14, σελ. 42, 43, 44 και 45<br />\
<span class="Tb">1989</span><br />\
<span class="T2">Θωμάς Παπαδοπεράκης: Διαπιστώσεις</span>, μηνιαίο περιοδικό                <span class="T2">ΑΛΕΞΙΣΦΑΙΡΟ</span> (Αθήνα) Τεύχος 20, εξώφυλλο με πίνακα Θωμά                  Παπαδοπεράκη και σελ. 65, 66 και 67<br />\
<span class="Tb">1993</span><br />\
<span class="T2">Η Βυζαντινή Αγιογραφία της Κρητικής Σχολής</span> ημερήσια εφημερίδα                 <span class="T2">ΤΟΛΜΗ</span> (Ηράκλειο Κρήτης), Μεγάλο Σάββατο 17 Απριλίου, σελ. 7 <br />\
<br />\
<span class="T2">Η επίσκεψη στο ατελιέ ενός ζωγράφου έχει πάντα ιδιαίτερο ενδιαφέρον και ο       τόπος δημιουργίας και έκφρασης της τέχνης ερμηνεύεται από τον ίδιο το δημιουργό με την αμεσότητα και την ειλικρίνεια που χαρακτηρίζει τους καλλιτέχνες</span>, μηνιαίο περιοδικό <span class="T2">ΚΗΦΙΣΟΣ</span> (Αθήνα), τεύχος 48 σελ. 28, 29, 30 και 31<br />\
<span class="Tb">2000</span><br />\
<span class="T2">Απόψεις για τον αιώνα που πέρασε και προβλέψεις γι΄ αυτόν που ήλθε</span> μηνιαία εφημερίδα τέχνης <span class="T2">ΤΑ ΝΕΑ ΤΗΣ ΤΕΧΝΗΣ</span> (Αθήνα), Νοέμβριος στήλη <span class="T2">Απόψεις</span> σελ. 26<br />\
<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ΘΕΩΡΗΤΙΚΕΣ ΜΕΛΕΤΕΣ ΤΟΥ ΚΑΛΛΙΤΕΧΝΗ</span> <br />\
\
<span class="Tb">1995</span><br />\
<span class="T2">Αντικειμενικότητα στη Ζωγραφική</span><br />\
<span class="Tb">1998</span><br />\
Τετράδιο τεσσάρων κειμένων:<br />\
<span class="T2">Το μόνο αντικειμενικό στοιχείο στη ζωγραφική είναι η οπτική αρμονία</span><br />\
Θέλω να καταστρέψω τη ζωγραφική μου με τα ίδια της τα μέσα<br />\
<span class="T2">Χρόνος</span><br />\
<span class="T2">Τέχνη του Ζην</span><br />\
<span class="Tb">1999</span><br />\
<span class="T2">Μανιφέστο: Η Tέχνη του Ζην</span>, με πρόλογο του καθηγητή της αισθητικής                 του Πανεπιστημίου της Νίκαιας Maurice ELΙE<br />\
<span class="Tb">2001</span><br />\
<span class="T2">Η Tέχνη του Μεταφορικού Συλλογισμού</span><br />\
<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ΚΡΙΤΙΚΕΣ ΑΠΟ ΑΤΟΜΙΚΕΣ ΕΚΘΕΣΕΙΣ</span><br />\
\
<span class="T2b">Αίθουσα Τέχνης ΩΡΑ (1974)</span><br />\
<span class="T2">Βεατρίκη Σπηλιάδη</span>: Ημερ. Εφημερίδα <span class="T2">ΚΑΘΗΜΕΡΙΝΗ</span>, στήλη Τέχνη (6/10)<br />\
<span class="T2">Πέτρος Μακρής</span>: Ημερ. Εφημερίδα <span class="T2">ΑΘΗΝΑΪΚΗ</span>, στήλη Εικαστικές Τέχνες (10/10) <span class="T2">Τ.Τσιρόπουλος</span>: Ημερ. Εφημερίδα <span class="T2">ΘΕΣΣΑΛΟΝΙΚΗ</span> (10/10)<br />\
<span class="T2">Έφη Ανδρεάδη</span>: Ημερ. Εφημερίδα <span class="T2">ΤΟ ΒΗΜΑ</span> (10/10)<br />\
<span class="T2">Μαρία Κοτζαμάνη</span>: Ημερ. Εφημερίδα <span class="T2">ΤΑ ΝΕΑ</span> (31/10)<br />\
<br />\
<span class="T2b">Αίθουσα Τέχνης ΚΡΕΩΝΙΔΗΣ (1979)</span><br />\
<span class="T2">Κωστής Μεραναίος</span>: Περιοδικό <span class="T2">ΚΑΙΝΟΥΡΓΙΑ ΕΠΟΧΗ</span> 2ας περιόδου χειμώνας 1978-79 (Αθήνα), σελ. 159<br />\
<br />'
+
'<span class="T2b">Αίθουσα Τέχνης ΓΚΑΛΕΡΙ 3 (1989)</span><br />\
<span class="T2">Ντόρα Ηλιοπούλου-Ρογκάν</span>: Ημερ. Εφημερίδα <span class="T2">ΚΑΘΗΜΕΡΙΝΗ</span>                                              <span class="T2">Ανθρώπινες μορφές-συνθέσεις</span><br />\
<span class="T2">Ντιάνα Αντωνακάτου</span> : Περιοδικό <span class="T2">ΠΟΛΙΤΙΚΑ ΘΕΜΑΤΑ</span>, (Αθήνα)<br />\
<span class="T2">Μαρία Μαραγκού</span>: Ημερ. Εφημερίδα <span class="T2">ΕΛΕΥΘΕΡΟΤΥΠΙΑ</span>, στήλη <span class="T2">Εικαστικά</span><br />\
<span class="T2">Νίκος Αλεξίου</span>: Ημερ. Εφημερίδα <span class="T2">ΡΙΖΟΣΠΑΣΤΗΣ, Ταξίδι στα κύματα</span>, σελ. 20<br />\
<br />'
,
'<span class="Tb_14_cent_shad">ΜΕΡΙΚΕΣ ΧΡΟΝΟΛΟΓΙΕΣ ΚΑΙ ΗΜΕΡΟΜΗΝΙΕΣ ΑΝΑΦΟΡΑΣ</span><br />\
<br />\
<span class="Tb">1955</span><br />\
Γνωριμία με τον αγιογράφο Στέλιο Καρτάκη που στάθηκε πρώτος του δάσκαλος και που το εισάγει στον πλούσιο κόσμο της βυζαντινής τέχνης και της πειθαρχίας της εργαστηριακής ζωής.<br />\
<br />\
<br />\
Κατά την επταετή παραμονή του στο Παρίσι, γνώρισε μεταξύ άλλων την IRIS CLERT και τη LILA DE NOBILE και  τους ΑΛΕΞΑΝΔΡΟ ΙΟΛΑ, CÉSAR και TÉRIADE (Ελευθεριάδης).<br />\
<br />\
<br />\
<span class="Tb">1977</span><br />\
Διαμονή ενός έτους περίπου στο Βερολίνο<br />\
<span class="Tb">1978</span><br />\
Γνωριμία με την μέλλουσα σύζυγό του <a href ="#" id="17_cv">Ελένη</a> στην Αθήνα<br />\
<span class="Tb">1983</span><br />\
Πολιτικός γάμος (29/06) και γέννηση της κόρης τους, Λουίζ (03/07)<br />\
<span class="Tb">1994</span><br />\
Μόνιμη εγκατάσταση στη <a href ="#" id="18_cv">Νίκαια</a> Γαλλίας (Αύγουστος)<br />\
<span class="Tb">1998</span><br />\
Ξεκινάει έντονη περίοδος θεωρητικών μελετών για την <span class="T2">τέχνη του ζην</span> που καταλήγει σε μορφή μανιφέστου και στη συνέχεια στην <span class="T2">τέχνη του μεταφορικού συλλογισμού</span>.<br />\
<span class="Tb">2002</span><br />\
Βρίσκει τον <a href ="#" id="19_cv">θάνατο</a> με καρδιακή προσβολή (12 Σεπτεμβρίου)<br />'
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
Έργα του καλλιτέχνη βρίσκονται στην <span class="T2">Εθνική Πινακοθήκη</span> Αθηνών και σε διάφορες ιδιωτικές συλλογές στην Ελλάδα και στο εξωτερικό, όπως η γνωστή μεγάλη συλλογή του ÉLIE DE ROTHSCHILD στο Παρίσι<br />\
<br />\
<br />\
<br />\
<br />\
<span style="text-align: center; display:block;" >-----------</span><br />\
'
]

