/* global my */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i18n, theMap, theMapElement, theMarker, 
        theMail = 'tytsycup<span style="display: none">some</span>&#0040;at&#0041;<span class="my-hidden">more</span>' + 'gmail.com',
        tytsycup = {
        },
        sponsorLinks = 'Hyundai tukee tätäkin turnausta:<br />' +
                       '<a href="pdf/Hyundai_junioriturnaukset_2014.pdf" target="_new">Hyundai junioriturnaukset</a><br />' + 
                       '<a href="pdf/Hyundai _A5_turnausilmoitus_2014.pdf" target="_new">Hyundai Turnausilmoitus</a><br />' +
                       '<a href="pdf/Hyundai_jalkapallo_Brasilia_2014.pdf" target="_new">Hyundai Brasilia 2014</a><br />' +
                       '<a href="pdf/Paavalmentajan_terveiset_20140320.pdf" target="_new">Päävalmentajan terveiset</a><br />',
	rules = '',
	loremIpsum = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum odio velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec luctus rutrum leo, vel feugiat sem blandit quis. Pellentesque mollis et magna et vulputate. In sed quam et lacus pharetra sodales. Phasellus consectetur urna id molestie mollis. Nunc tristique fringilla nunc eu placerat. In a venenatis urna, vitae adipiscing sapien. Aliquam lorem urna, hendrerit in turpis eget, mollis convallis nulla. Donec ac diam luctus, interdum dui non, ullamcorper nibh. Cras sollicitudin nibh et dolor facilisis, at vulputate libero aliquam. Cras leo dui, scelerisque nec enim at, elementum bibendum nulla. Mauris turpis odio, dignissim sed enim ac, fringilla bibendum ipsum. Quisque ac nulla sed nibh pharetra vehicula id id augue.</p>' + 
            '<p>Quisque venenatis tincidunt risus, sed sagittis purus pharetra nec. Maecenas viverra ligula sit amet erat consequat tempus. Quisque tempus massa vel purus auctor, id suscipit orci pharetra. Maecenas mi leo, tempor ut scelerisque nec, molestie in purus. Donec massa erat, feugiat in felis eget, bibendum euismod turpis. In eget eros bibendum, fermentum turpis vel, ultrices felis. Quisque pretium pellentesque consequat. Phasellus arcu nunc, venenatis sit amet semper ac, vestibulum vitae erat. Aliquam varius elit nec leo vulputate scelerisque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse lorem lectus, gravida non est at, varius venenatis lorem. Cras quis velit metus. Quisque sit amet porttitor risus, ut consequat erat. Pellentesque lacinia nec risus at venenatis. Nunc fermentum dui consectetur felis euismod commodo. Curabitur lobortis, nulla eu dictum lobortis, lacus erat varius odio, ac ultricies neque nisl vitae diam.</p>' +
            '<p>Sed et massa non erat tristique consequat vel sed elit. Maecenas commodo velit ut aliquam malesuada. Vestibulum pellentesque tempor ante, vel pretium ligula semper id. Curabitur vitae porttitor odio. Praesent posuere eget eros a dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sagittis enim eu tristique semper. Integer mattis urna in tellus euismod ultrices. Donec faucibus tincidunt diam, in suscipit odio luctus quis. Vivamus rhoncus tempus neque et vulputate. Morbi condimentum elit nulla, vel molestie ligula accumsan sit amet. Mauris eget felis mauris. In quis posuere libero. Sed sagittis elit ante, eget adipiscing nibh vulputate eget. Proin elit mi, varius at vehicula sit amet, tincidunt et nisi.</p>' +
            '<p>In lobortis interdum convallis. Vestibulum nec libero ut justo convallis varius vitae nec odio. Etiam sodales tristique diam, et dignissim turpis hendrerit ac. Proin egestas dapibus ligula et hendrerit. Integer semper vulputate consectetur. Suspendisse fringilla arcu nibh, et condimentum tortor mollis eu. Nunc ornare diam et sapien vehicula, a placerat purus rutrum. Nulla vel ullamcorper arcu. Fusce vulputate condimentum lorem et pellentesque. Quisque varius arcu justo, et suscipit tellus congue convallis. Mauris dictum volutpat malesuada.</p>' +
            '<p>Maecenas in nulla lacus. Integer dolor velit, congue ut scelerisque et, malesuada non nisi. Sed bibendum nibh vitae metus varius, vel auctor nunc pharetra. Donec sed velit ac ante scelerisque posuere nec vel felis. Nunc ut nulla commodo, ultrices lorem vel, cursus odio. Pellentesque dictum tellus in mollis tempus. Ut varius sollicitudin facilisis. Quisque rhoncus enim ut elit pharetra rutrum.</p>' +
            '<p>Cras eget felis ut purus ultrices dictum. Integer ac nunc id diam interdum bibendum. Donec eget sapien augue. Cras neque lacus, commodo sagittis cursus eget, volutpat non justo. Nam scelerisque non metus sit amet posuere. Sed ornare arcu risus, at ultricies dolor malesuada et. Nam turpis diam, luctus et orci a, faucibus fringilla leo. Nullam condimentum auctor leo, non consequat sem scelerisque et.</p>' +
            '<p>In hac habitasse platea dictumst. Nunc risus ligula, malesuada at massa quis, ullamcorper molestie metus. Etiam fringilla pharetra augue eget pulvinar. Donec non nibh nec ligula ultricies fermentum et in libero. Curabitur consectetur nunc at erat posuere, quis tristique dolor lobortis. Nullam aliquam, tellus ac semper luctus, diam leo tempus enim, vitae elementum sapien leo vitae magna. Nam venenatis ut lectus at laoreet.</p>' +
            '<p>Donec cursus ligula at massa ultricies malesuada. Donec id nunc in purus imperdiet elementum et sit amet felis. Nullam in pellentesque mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam id pharetra nibh, vitae dictum metus. Nullam volutpat pharetra massa, placerat elementum urna congue posuere. Sed sapien diam, molestie in cursus ornare, sollicitudin vitae est. Quisque eget consectetur nibh. Pellentesque dapibus metus urna, quis ultricies augue vestibulum eu. Maecenas aliquam leo in tincidunt suscipit. Duis eu cursus tellus, a tempor risus. Quisque sed fermentum quam. Suspendisse aliquet lectus ac lectus sollicitudin faucibus. Nullam eget ligula quis metus ornare feugiat eget eget velit. Mauris et faucibus dui.</p>' +
            '<p>Morbi tempor rutrum nulla sed interdum. Vivamus feugiat mollis risus ut fermentum. Pellentesque consequat ipsum tempus orci auctor facilisis. Vestibulum malesuada ultrices commodo. Donec cursus ornare augue, in consequat orci suscipit nec. Nullam ornare enim at massa rhoncus interdum. Sed placerat, purus eu condimentum pulvinar, tellus nulla luctus diam, at accumsan arcu leo a neque. Maecenas in nisi rhoncus, venenatis elit pulvinar, hendrerit eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed quis placerat mi, porta semper tellus. Praesent ac gravida lacus, vel porta tortor. Donec posuere luctus lacus eu luctus. Curabitur gravida odio non lectus sodales cursus. Integer fringilla, eros a accumsan interdum, odio metus viverra orci, at sagittis erat orci ac sem.</p>' +
            '<p>Maecenas convallis purus sed orci fermentum sagittis. Nam turpis dui, pretium vel aliquam non, euismod interdum augue. Donec vehicula leo vitae mi elementum, sit amet commodo nunc facilisis. Sed sed libero sit amet ligula malesuada placerat ac at felis. Nullam placerat facilisis tellus pharetra pretium. Donec id nisi ligula. Vivamus pulvinar lacus eu posuere aliquet. Aliquam erat volutpat. Curabitur iaculis nec lectus eu aliquam. Cras facilisis malesuada consectetur. Nullam quis metus gravida, lacinia elit eget, auctor magna. Nulla dictum est quis dui consectetur pharetra. Etiam mi nunc, sollicitudin nec enim luctus, molestie scelerisque lectus.</p>';
    tytsycup.localization = {
        SUPPORTED: ['fi_FI', "en_GB", "sv_SE"],
        DEFAULT: 'fi_FI',
        ERRORS: {
            ERROR_INFO: {
                fi_FI: 'Lomakkeella on <@= errorCount @> virhettä',
                sv_SE: 'Det finns <@= errorCount @> fel',
                en_GB: 'There is <@= errorCount @> errors',
                de_DE: 'Es gibt <@= errorCount @> Fehler'
            },
            OK_INFO: {
                fi_FI: 'Lomake on valmis lähetettäväksi',
                sv_SE: 'Formen är redo att skickas',
                en_GB: 'The form is ready to be sent',
                de_DE: 'Die Form ist zum Versand bereit'
            },
            //OK: [],
            OK: {
                fi_FI: 'OK',
                sv_SE: 'OK',
                en_GB: 'OK',
                de_DE: 'OK'
            },
            // used by any validator, something unexpected, propably validator defined incorrectly
            //INTERNAL_ERROR: ['validatorName', 'error'],
            INTERNAL_ERROR: {
                fi_FI: 'Jotain odottamatonta tapahtui, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">ilmoita virheestä</a>',
                sv_SE: 'Någonting gick fel, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">rapportera ett fel</a>',
                en_GB: 'Something went wrong, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">report a bug</a>',
                de_DE: 'Etwas stimmt nicht, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">melden Sie einen Fehler</a>'
            },
            // used by any validator, invalid paramters passed to validator
            //INVALID_PARAMETER: ['validatorName', 'parameterName', 'parameterValue'],
            INVALID_PARAMETER: {
                fi_FI: 'Jotain odottamatonta tapahtui, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">ilmoita virheestä</a>',
                sv_SE: 'Någonting gick fel, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">rapportera ett fel</a>',
                en_GB: 'Something went wrong, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">report a bug</a>',
                de_DE: 'Etwas stimmt nicht, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">melden Sie einen Fehler</a>'
            },
            // REQUIRED ATTRIBUTES
            // used by: 'defined'
            //NOT_DEFINED: [],
            NOT_DEFINED: {
                fi_FI: 'Tämä on pakollinen tieto',
                sv_SE: 'Du måste fylla detta fält',
                en_GB: 'You have to fill this field',
                de_DE: 'Sie müssen dieses Feld ausfüllen'
            },
            // NUMBER ATTRIBUTES
            // used by: 'min', 'max'
            NOT_NUMBER: ['value'],
            // used by: 'min'
            TOO_SMALL: ['value', 'minAccepted'],
            // used by: 'max'
            TOO_LARGE: ['value', 'maxAccepted'],
            // TEXT ATTRIBUTES
            // used by: 'minLength'
            //TOO_SHORT: ['value', 'length', 'minAccepted'],
            TOO_SHORT: {
                fi_FI: 'Liian lyhyt arvo (vähimmäispituus on <@= minAccepted @> merkkiä)',
                sv_SE: 'För kort värde (det minsta accepterade värdet är <@= minAccepted @> tecken',
                en_GB: 'Too short value (the minimum accepted value is <@= minAccepted @> characters)',
                de_DE: 'Der Wert ist zu kurz (die minimale akzeptable Länge ist <@= minAccepted @> Zeichen)'
            },
            // used by: 'maxLength'
            //TOO_LONG: ['value', 'length', 'maxAccepted'],
            TOO_LONG: {
                fi_FI: 'Liian pitkä arvo (enimmäispituus on <@= maxAccepted @> merkkiä)',
                sv_SE: 'För länge värde (det största accepterade värdet är <@= maxAccepted @> tecken',
                en_GB: 'Too long value (the maximum accepted value is <@= maxAccepted @> characters)',
                de_DE: 'Der Wert ist zu lang (die maximal akzeptable Länge ist <@= maxAccepted @> Zeichen)'
             },
            // PATTERN ATTRIBUTES
            // used by: 'email'
            //INVALID_EMAIL: ['value'],
            INVALID_EMAIL: {
                fi_FI: 'Virheellinen sähköpostiosoite',
                sv_SE: 'Ogiltig e-postadress',
                en_GB: 'Invalid email',
                de_DE: 'Ungültige E-Mail-Adresse'
            },
            // used by: 'phone'
            //INVALID_PHONE: ['value'],
            // used by: 'password'
            //INVALID_PASSWORD_NO_UPPER: [],
            INVALID_PASSWORD_NO_UPPER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_LOWER: [],
            INVALID_PASSWORD_NO_LOWER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_NUMBER: [],
            INVALID_PASSWORD_NO_NUMBER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_SPECIAL_CHARACTERS: [],
            INVALID_PASSWORD_NO_SPECIAL_CHARACTERS: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            // INSAME VALIDATION ERRORS:
            USERNAME_ALREADY_IN_USE: {
                fi_FI: 'Käyttäjätunnus on jo varattu. Ota yhteyttä asiakaspalveluumme mikäli epäilet väärinkäytöstä',
                sv_SE: '',
                en_GB: 'Username is already registered. Please contact our customer service if you someone is using your email.',
                de_DE: 'TODO'
                
            }
        },
        GLOBAL: {
            VALIDATING: {
                fi_FI: 'Tarkistetaan syötettäsi',
                en_GB: 'Checking your input',
                sv_SE: 'Valideras din input '
                
            },
            // MAIN
            MAIN_TITLE: {
                fi_FI: 'Tytsy Cup 2018',
                en_GB: 'Tytsy Cup 2018',
                sv_SE: 'Tytsy Cup 2018'
            },
            MAIN_WELCOME_TEXT: {
                fi_FI: 'Tervetuloa <a href="http://www.kaana.fi/joukkueet/tytot/tytot-2010/" target="_new">KaaNa Tytöt 2010 -joukkueen</a> järjestämän Tytsy Cup 2018:n kotisivuille!',
                en_GB: 'Welcome to Tytsy Cup 2018 homepage!',
                sv_SE: 'Välkommen till Tytsy Cup 2018 hemsidan!'
            },
            MENU_TITLE: {
                fi_FI: 'Tytsy Cup 2018',
                en_GB: 'Tytsy Cup 2018',
                sv_SE: 'Tytsy Cup 2018'
            },
            MENU_ADMIN: {
                fi_FI: 'Ylläpito',
                en_GB: 'Administration',
                sv_SE: 'Admin'
            },
            MENU_MAIN: {
                fi_FI: 'Pääsivu',
                en_GB: 'Main',
                sv_SE: 'Hemsidan'
            },
            MENU_ABOUT: {
                fi_FI: 'Tietoja',
                en_GB: 'Information',
                sv_SE: 'Information'
            },
            MENU_REGISTRATION: {
                fi_FI: 'Palaute',
                en_GB: 'Registration/feedback',
                sv_SE: 'Registrering/återkoppling'
            },
            ABOUT_REGISTRATION: {
                fi_FI: 'HUOM! Kilpasarja ja haastajasarja ovat jo täynnä.',
                en_GB: 'Registration/feedback',
                sv_SE: 'Registrering/återkoppling'
            },
            MENU_RESULTS: {
                fi_FI: 'Tulokset',
                en_GB: 'Results',
                sv_SE: 'Resultat'
            },
            HEADING_ABOUT_TOURNAMENT: {
                fi_FI: 'Turnaus',
                en_GB: 'Tournament',
                sv_SE: 'Turnering'
            },
            CONTENT_ABOUT_TOURNAMENT: {
                fi_FI: 'Turnauksessa on kaksi eri tasoista sarjaa 2005 syntyneille pojille (F9): kilpasarja ja haastajasarja.',
                en_GB: 'There are two different levels of series for boys born on 2005: challenge and competition series.',
                sv_SE: 'Det finns två olika nivå för pojkar födda 2005: motionsserie och tävlningsserie.'
            },
            HEADING_ABOUT_SCHEDULE: {
                fi_FI: 'Aikataulu',
                en_GB: 'Schedule',
                sv_SE: 'Schema'
            },
            CONTENT_ABOUT_SCHEDULE: {
                fi_FI: 'Turnaus on kaksipäiväinen, haastajaturnaus pelataan lauanataina x.y.2014 ja kilpaturnaus pelataan z.y.2014.',
                en_GB: 'Tournament for challenge series is on x.y.2014 and for competition series on z.y.2014.',
                sv_SE: 'Turnering hållas på två dag, motionsserie på x.y.2014 och tävlningsserie på z.y.2014.'
                
            },
            HEADING_ABOUT_LOCATION: {
                fi_FI: 'Sijainti',
                en_GB: 'Location',
                sv_SE: 'Läge'
            },
            CONTENT_ABOUT_LOCATION: {
                fi_FI: 'Turnaus järjestetään Turussa xxxxn kentällä.',
                en_GB: 'Tournament for challenge series is on x.y.2014 and for competition series on z.y.2014.',
                sv_SE: 'Turnering hållas i Åbo, Finland.'
                
            },
            HEADING_ABOUT_MAP: {
                fi_FI: 'Kartta ja ajo-ohjeet',
                en_GB: 'Map and driving instructions',
                sv_SE: 'Karta och körinstruktioner'
            },
            CONTENT_ABOUT_MAPLINK: {
                fi_FI: 'Ajo-ohjeet saat Google Mapsista',
                en_GB: 'Driving instructions can be found from Google Maps',
                sv_SE: 'Körinstruktioner finns i Google Maps'
                
            },
            HEADING_ABOUT_RULES: {
                fi_FI: 'Turnauksen säännöt',
                en_GB: 'Rules for the tournament',
                sv_SE: 'TODO'
            },
            CONTENT_ABOUT_RULES: {
                fi_FI: rules,
                en_GB: rules,
                sv_SE: rules
            },
            HEADING_ABOUT_ELITE: {
                fi_FI: 'Kilpasarjaan ilmoittautuneet',
                en_GB: 'Registrations for competition series',
                sv_SE: 'Registrerings för tävlningsserie'
            },
            CONTENT_ABOUT_ELITE: {
                fi_FI: 'TPS F9',
                en_GB: 'TPS F9',
                sv_SE: 'TPS F9'
                
            },
            HEADING_ABOUT_CHALLENGE: {
                fi_FI: 'Haastajasarjaan ilmoittautuneet',
                en_GB: 'Registrations for challenge series',
                sv_SE: 'Registrerings för motionsserie'
            },
            CONTENT_ABOUT_CHALLENGE: {
                fi_FI: 'TPS F9 valkoinen',
                en_GB: 'TPS F9 white',
                sv_SE: 'TPS F9 vit'
                
            },
            /*
             *                 //            matchCount: 'getResultTableAttribute',//MP matches played
            winCount: 'getResultTableAttribute',// W wins
            drawCount: 'getResultTableAttribute', // D draws
            looseCount: 'getResultTableAttribute', // L losses
            goalsFor: 'getResultTableAttribute',// F Goals for
            goalsAgainst: 'getResultTableAttribute',// A Goals against
            goalDifference: 'getResultTableAttribute',// D Goal difference
            points: 'getResultTableAttribute' //P points
                <th class="my-LocalizedTitle" code="RESULT_TABLE_TEAM"><span class="my-Localized" code="RESULT_TABLE_TEAM"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_MATCHES_PLAYED"><span class="my-Localized" code="RESULT_TABLE_MP"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_WINS"><span class="my-Localized" code="RESULT_TABLE_MW"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_DRAWS"><span class="my-Localized" code="RESULT_TABLE_MD"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_LOSSES"><span class="my-Localized" code="RESULT_TABLE_ML"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOALS_FOR"><span class="my-Localized" code="RESULT_TABLE_GF"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOALS_AGAINST"><span class="my-Localized" code="RESULT_TABLE_GA"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOAL_DIFFERENCE"><span class="my-Localized" code="RESULT_TABLE_GD"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_POINTS"><span class="my-Localized" code="RESULT_TABLE_P"></span></th>

            */
            RESULT_TABLE_TEAM: {
                fi_FI: 'Joukkue',
                en_GB: 'Team',
                se_SV: 'Lag'
            },
            RESULT_TABLE_MATCHES_PLAYED: {
                fi_FI: 'Otteluita',
                en_GB: 'Matches played',
                se_SV: 'Spelade matcher'
            },
            RESULT_TABLE_MP: {
                fi_FI: 'O',
                en_GB: 'MP',
                se_SV: 'S'
            },
            RESULT_TABLE_WINS: {
                fi_FI: 'Voittoja',
                en_GB: 'Wins',
                se_SV: 'Vunna matcher'
            },
            RESULT_TABLE_MW: {
                fi_FI: 'V',
                en_GB: 'W',
                se_SV: 'V'
            },
            RESULT_TABLE_DRAWS: {
                fi_FI: 'Tasapelejä',
                en_GB: 'Draws',
                se_SV: 'Oavgjorda matcher'
            },
            RESULT_TABLE_MD: {
                fi_FI: 'T',
                en_GB: 'D',
                se_SV: 'O'
            },
            RESULT_TABLE_LOSSES: {
                fi_FI: 'Häviöitä',
                en_GB: 'Losses',
                se_SV: 'Förlorade matcher'
            },
            RESULT_TABLE_ML: {
                fi_FI: 'H',
                en_GB: 'L',
                se_SV: 'F'
            },
            RESULT_TABLE_GOALS_FOR: {
                fi_FI: 'Tehdyt maalit',
                en_GB: 'Goals for',
                se_SV: 'Gjorda mål'
            },
            RESULT_TABLE_GF: {
                fi_FI: 'TM',
                en_GB: 'F',
                se_SV: 'GM'
            },
            RESULT_TABLE_GOALS_AGAINST: {
                fi_FI: 'Päästetyt maalit',
                en_GB: 'Goals against',
                se_SV: 'Insläppta mål'
            },
            RESULT_TABLE_GA: {
                fi_FI: 'PM',
                en_GB: 'A',
                se_SV: 'IM'
            },
            RESULT_TABLE_GOAL_DIFFERENCE: {
                fi_FI: 'Maaliero',
                en_GB: 'Goal difference',
                se_SV: 'Difference'
            },
            RESULT_TABLE_GD: {
                fi_FI: 'ME',
                en_GB: 'D',
                se_SV: 'D'
            },
            RESULT_TABLE_POINTS: {
                fi_FI: 'Pisteet',
                en_GB: 'Points',
                se_SV: 'Poäng'
            },
            RESULT_TABLE_P: {
                fi_FI: 'P',
                en_GB: 'P',
                se_SV: 'P'
            },
           //S = Spelade matcher, V = Vunna matcher, O = Oavgjorda matcher, F = Förlorade matcher, GM = Gjorda mål, IM = Insläppta mål, D = Differens, P = Poäng
            
            
            MESSAGE_TYPE_REGISTER_ELITE: {
                fi_FI: 'Ilmoittaudu F9 kilpasarjaan',
                en_GB: 'Register to competition series',
                sv_SE: 'Registrera till tävlingsserie'
            },
            MESSAGE_TYPE_REGISTER_CHALLENGE: {
                fi_FI: 'Ilmoittaudu F9 haastajasarjaan',
                en_GB: 'Register to challenge series',
                sv_SE: 'Registrera till motionsserie'
            },
            MESSAGE_TYPE_QUESTION_OR_FEEDBACK: {
                fi_FI: 'Kysymys tai palaute',
                en_GB: 'Question or feedback',
                sv_SE: 'Frågan eller återkoppling'
            },
            MESSAGE_TYPE: {
                fi_FI: 'Viestin tyyppi',
                en_GB: 'Message type',
                sv_SE: 'Meddelande typ'
            },
            HERE_WE_PLAY: {
                fi_FI: 'Täällä pelataan!',
                en_GB: 'Here we play!',
                sv_SE: 'Här spelar vi!'
            },
            SEND: {
                fi_FI: 'Lähetä',
                sv_SE: 'Skicka ',
                en_GB: 'Send'
            },
            CLOSE: {
                fi_FI: 'Sulje',
                sv_SE: 'Stäng',
                en_GB: 'Close'
            },
            MAIL_ADDRESS: {
                fi_FI: theMail,
                sv_SE: theMail,
                en_GB: theMail
            },
            SENDING_MAIL: {
                fi_FI: 'Viestiäsi lähetetään...',
                sv_SE: 'Ditt meddelande skickas...',
                en_GB: 'Sending your message...',
                de_DE: 'TODO'
            },
            MAIL_SENT: {
                fi_FI: 'Kiitos viestistäsi!',
                sv_SE: 'Tack för ditt meddelande!',
                en_GB: 'Thank you for your message!',
                de_DE: 'TODO'
            },
            MAIL_SEND_FAILED: {
                fi_FI: 'Viestin lähetys epäonnistui! Lähetä ilmoittautumisesi/viestisi sähköpostitse osoitteeseen  ' + theMail,
                sv_SE: 'Ditt meddelande skickades inte! Skicka ditt meddelande/återkoppling till e-post addresse ' + theMail,
                en_GB: 'Sending message failed! Please send your registration/feedback to ' + theMail,
                de_DE: 'TODO'
           }
        }
    };
    i18n = tytsycup.localization.GLOBAL;
    tytsycup.consts = {
        MESSAGE_TYPE: new my.Enumeration([
           {id: 1, label: i18n.MESSAGE_TYPE_REGISTER_ELITE, disabled: true},
           {id: 2, label: i18n.MESSAGE_TYPE_REGISTER_CHALLENGE, disabled: true},
           {id: 3, label: i18n.MESSAGE_TYPE_QUESTION_OR_FEEDBACK, defaultValue: true}
        ])
    };
    _.extend(my.localization, tytsycup.localization);
    tytsycup.model = {
        Contact: my.model.Model.extend({
            name: 'Contact',
            url: 'N/A',
            attributeTypes: {
                message: my.model.ATTRIBUTE_TYPES.TEXTAREA,
                messageType: my.model.ATTRIBUTE_TYPES.ENUMERATION
            },
            enumerationConfig: {
                messageType: {enumeration: tytsycup.consts.MESSAGE_TYPE}
            },
            validators: {
                email: [
                    'defined',
                    'email'
                ],
                team: [
                    'defined',
                    new my.validation.ValidatorInfo('length', {minAccepted: 2, maxAccepted: 4000})
                ],
                message: [
                    'defined',
                    new my.validation.ValidatorInfo('length', {minAccepted: 2, maxAccepted: 4000})
                ]
            },
            editableAttributes: ['name', 'team', 'email', 'message', 'messageType'],
            getMail: function (linebreak) {
                var br;
                if (typeof linebreak === 'undefined') {
                    br = '<br>';
                } else {
                    br = linebreak;
                }
                return "Moi Rami," + br + br + "Ilmoittautuminen/palaute osoitteesta tytsycup.myweb.fi" + br + br + "Viestin tyyppi:" +this.getText('messageType', 'fi_FI') + br + br + "Yhteyshenkilö: " + this.get('name') + " (" + this.get('email') + ")" + br + br + "Joukkue: " + this.get('team') + "" + br + br + "Viesti:" + br + "" + this.get("message")  + br + br + "t. Harri" + br;
            },
            getMailAsText: function () {
                return this.getMail('\n');
            },
            save: function () {
                var me = this;
                my.log('Sending contact:' + this.getMail());
                my.mail.send(this.getMail(), this.getMailAsText(), this.get('email') || 'no-reply@myweb.fi', this.get('name') || '',function() {
                    my.log('Mail sent');
                    me.trigger('sync', me, true);
                },
                function () {
                    my.log('Mail sent failed');
                    me.trigger('sync', me, false);
                },
                window
                );
            }
        })
    };
    
    tytsycup.view = {
        /*
            -- MENU STRUCTURE --
            - MAIN
            - ABOUT
            - REGISTRATION
            - RESULTS
                - COMPETITION
                - HOBBY
        */
        // declare your namespace here
        MenuView: my.view.MenuView.extend({
            name: 'Menu',
            title: '',
            onUserUpdated: function () {
                var user = my.app.getUserPrincipal();
                my.log('User updated: ' + user.get('username'));
                this.render();
            }
        }),
        AboutView: my.view.View.extend({
            name: 'About',
            title: tytsycup.localization.GLOBAL.MENU_ABOUT,
            events: {
                'click .tytsycup-AboutView-Directions': 'showDirections'
            },
            showDirections: function () {
                window.alert('Ohjeet: ' + this.$el.find('.tytsycup-AboutView-WhereFrom').val());
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                var location, mapOptions, x, y;
                x = 60.4063604;
                y = 22.3838327;
                if (typeof theMap === 'undefined') {
                    //http://code.google.com/p/gmaps-api-issues/issues/detail?id=3803
                    location = new google.maps.LatLng(x, y);
                    mapOptions = {
                        center: location,
                        zoom: 12
                    };
                    theMapElement = this.$el.find('.tytsycup-AboutView-GoogleMap');
                    theMap = new google.maps.Map(theMapElement.get(0), mapOptions);
                    theMarker = new google.maps.Marker({
                        position: location,
                        map: theMap,
                        title: i18n.HERE_WE_PLAY[my.app.getCurrentLocale()]
                    });
                } else {
                    this.$el.find('.tytsycup-AboutView-GoogleMap').replaceWith(theMapElement);
                    theMarker.setTitle(i18n.HERE_WE_PLAY[my.app.getCurrentLocale()]);
                }
                
                this.$el.find('a.tytsycup-AboutView-GoogleMapLink').attr('href', '//maps.google.com/?q=' + x + ',' + y);
            },
            remove: function () {
                my.log('remove map, no keep it due to a bug in google maps js api');
                // removing map should be done by removing the element? 
                my.view.View.prototype.remove.apply(this, arguments);
            }
        }),
        MainView: my.view.View.extend({
            name: 'Main',
            title: tytsycup.localization.GLOBAL.MENU_MAIN,
            defaultView: true
        }),
        MatchListView: my.view.View.extend({
            attributeNames: ['homeTeamId', 'visitorTeamId', 'complete', 'includeInResultTable', 'homeTeamDescription','visitorTeamDescription', 'time', 'homeTeamName','visitorTeamName', 'homeGoals', 'visitorGoals'],
            name: 'MatchList',
            tagName: 'tr',
            initialize: function () {
                my.view.View.prototype.initialize.apply(this, arguments);
                this.model.on('change:complete', this.onCompleteChange, this);
            },
            remove: function () {
                my.view.View.prototype.remove.apply(this, arguments);
                this.model.off('change:complete', this.onCompleteChange, this);
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                this.onCompleteChange();
            },
            onCompleteChange: function () {
                if (this.model.get('complete')) {
                    this.$el.find('.tytsycup-MatchListView-Match-homeGoals').show();
                    this.$el.find('.tytsycup-MatchListView-Match-visitorGoals').show();
                } else {
                    this.$el.find('.tytsycup-MatchListView-Match-homeGoals').hide();
                    this.$el.find('.tytsycup-MatchListView-Match-visitorGoals').hide();
                    
                }
            },
            events: {
                'click .tytsycup-MatchListView-remove': 'removeMatch'
            },
            removeMatch: function () {
                this.model.remove();
            }
        }),
        TournamentView: my.view.View.extend({
            name: 'Tournament',
            tagName: 'tr',
            events: {
                'click .tytsycup-TournamentView-save': 'save'
            },
            save: function () {
                this.model.save({}, {now: new Date().getTime(), success: function () {
                        my.eventBus.trigger('message', 'Saved successfully');
                    },
                    error: function () {
                        my.eventBus.trigger('message', 'Saving failed');
                    }
                });
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                _.each(this.model.getChildCollection('Team').models, function (team) {
                    this.addModel(team, ['name', 'background'], {SubView: tytsycup.view.ResultTableTeamView});
                }, this);
                _.each(this.model.getChildCollection('Match').models, function (match) {
                    this.addModel(match, tytsycup.view.MatchListView.prototype.attributeNames, {SubView: tytsycup.view.MatchListView});
                }, this);
            }
        }),
        RoundListView: my.view.View.extend({
            name: 'RoundList',
            tagName: 'tr',
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                _.each(this.model.getMatches(), function (match) {
                    this.addModel(match, ['homeTeamId', 'visitorTeamId'], {SubView: tytsycup.view.MatchListView, readonly: true});
                }, this);
                
            }
        }),
        ResultTableTeamView: my.view.View.extend({
            name: 'ResultTableTeam',
            tagName: 'tr'
        }),
        ResultsView: my.view.View.extend({
            name: 'Results',
            title: tytsycup.localization.GLOBAL.MENU_Results,
        }),
        TweetsView: my.view.View.extend({
            name: 'Tweets',
            render: function () {
                jQuery('#my-tweets .tytsycup-TweetsView-readonly').removeClass('my-hidden');
            },
            remove: function () {
                jQuery('#my-tweets .tytsycup-TweetsView-readonly').addClass('my-hidden');
                my.view.View.prototype.remove.apply(this, arguments);
            }
        })
    };
    /*
    tytsycup.view.TweetsOnlineView = tytsycup.view.OnlineView.extend({
        name: 'TweetsOnline',
        title: 'Twiitit',
        defaultNavi:  [
            {name: 'Main', time: 10000},
            {name: 'Tweets', time: 20000, options: {readonly: true}}
        ]
    });
    */
    my.app.registerView(tytsycup.view.MenuView);
    my.app.registerView(tytsycup.view.AboutView);
    my.app.registerView(tytsycup.view.MainView);
    my.app.registerView(tytsycup.view.ResultsView);
    my.app.registerView(tytsycup.view.TweetsView);
//    my.app.registerView(tytsycup.view.TweetsOnlineView);
//    my.app.registerView(tytsycup.view.LandingView);


    my.eventBus.trigger('event', 'All views registered, initializing map...');
    jQuery(function () {
            my.app.start({
                templatesPath: 'templates.html',
                templateIdPrefix: 'tytsycup-',
                templateIdPostfix: 'View',
                userPath: 'data.php',
                loginPath: 'login.php',
                logoutPath: 'logout.php',
                emailerPath: 'API/Emailer.php',
                GoogleAnalyticsTrackingCode: 'UA-42886058-2',
                GoogleAnalyticsCreateOptions: {cookieDomain: 'tulostaulu.com'}//'myweb.fi';

            });
            
    });

