const Joi = require('joi');

const express= require('express');

const app = express();

app.use(express.json());

const courses = [
    {
      "id": 1,
      "name": "B.sc. ( Food Science & Technology)"
    },
    {
      "id": 2,
      "name": "B.sc. ( Agriculture, education, And Extension)"
    },
    {
      "id": 3,
      "name": "B.sc. (agribusiness Management)"
    },
    {
      "id": 4,
      "name": "B.sc. (Food Science, Nutrition & Dietetics)"
    },
    {
      "id": 5,
      "name": "BSc. agricultural Economics"
    },
    {
      "id": 6,
      "name": "BSc. agricultural Education And Extension"
    },
    {
      "id": 7,
      "name": "Bachelor Of Science In Agriculture(animal Science Major)"
    },
    {
      "id": 8,
      "name": "Bachelor Of Science Fisheries And Aquaculture Management"
    },
    {
      "id": 9,
      "name": "Bachelor Of Science In Wildlife Management And Conservation"
    },
    {
      "id": 10,
      "name": "BSc Food Science And Technology"
    },
    {
      "id": 11,
      "name": "BSc Food Nutrition And Dietetics"
    },
    {
      "id": 12,
      "name": "B.sc. (agriculture)"
    },
    {
      "id": 13,
      "name": "B.sc. ( Range Management)"
    },
    {
      "id": 14,
      "name": "BSc. Management Of Agroecosystems & Environment"
    },
    {
      "id": 15,
      "name": "Bachelor Of Science In Horticulture"
    },
    {
      "id": 16,
      "name": "Bachelor Of Veterinary Medicine"
    },
    {
      "id": 17,
      "name": "BSc. In Wildlife Management And Conservation"
    },
    {
      "id": 18,
      "name": "B.sc. (bio-medical Technology)"
    },
    {
      "id": 19,
      "name": "Bachelor Of Science In Environmental Chemistry"
    },
    {
      "id": 20,
      "name": "Bachelor Of Science In Analytical Chemistry"
    },
    {
      "id": 21,
      "name": "B.sc Industrial Chemistry"
    },
    {
      "id": 22,
      "name": "B.sc Chemistry"
    },
    {
      "id": 23,
      "name": "Bachelor Of Science In Petroleum Geoscience"
    },
    {
      "id": 24,
      "name": "Bachelor Of Science In Actuarial Science"
    },
    {
      "id": 25,
      "name": "Bachelor Of Science In Mathematics"
    },
    {
      "id": 26,
      "name": "Bachelor Of Science In Statistics"
    },
    {
      "id": 27,
      "name": "Bachelor Of Science Mathematics And Computing"
    },
    {
      "id": 28,
      "name": "B.sc. (meteorology)"
    },
    {
      "id": 29,
      "name": "Bachelor Of Science In Atmospheric Science"
    },
    {
      "id": 30,
      "name": "B.sc (microprocessor Technology & Instrumentation)"
    },
    {
      "id": 31,
      "name": "B.sc. In Astronomy And Astrophysics"
    },
    {
      "id": 32,
      "name": "Bachelor Of Science In Physics"
    },
    {
      "id": 33,
      "name": "Bed Science (physics)"
    },
    {
      "id": 34,
      "name": "B.sc.(biology)"
    },
    {
      "id": 35,
      "name": "BSc. Microbiology And Biotechnology"
    },
    {
      "id": 36,
      "name": "Bachelor Of Science In Environmental Conservation And Natural Resource Management"
    },
    {
      "id": 37,
      "name": "BSc. Computer Science"
    },
    {
      "id": 38,
      "name": "B.sc. Industrial Chemistry"
    },
    {
      "id": 39,
      "name": "Bachelor Of Science (Distance Learning)"
    },
    {
      "id": 40,
      "name": "BSc Geology (Distance Learning)"
    },
    {
      "id": 41,
      "name": "Bachelor Of Education (science)"
    },
    {
      "id": 42,
      "name": "B.sc. Analytical Chemistry"
    },
    {
      "id": 43,
      "name": "Bachelor Of Science In Chemistry"
    },
    {
      "id": 44,
      "name": "Bas/barch"
    },
    {
      "id": 45,
      "name": "B.a. Design"
    },
    {
      "id": 46,
      "name": "B.sc. (Civil Engineering)"
    },
    {
      "id": 47,
      "name": "B.sc. (environmental And Biosystems Engineering)"
    },
    {
      "id": 48,
      "name": "B.sc. ( Electrical And Electronic Engineering)"
    },
    {
      "id": 49,
      "name": "B.sc.(surveying)"
    },
    {
      "id": 50,
      "name": "B.sc. ( Electrical Engineering)"
    },
    {
      "id": 51,
      "name": "B.sc. (geospatial Engineering)"
    },
    {
      "id": 52,
      "name": "B.sc. (Mechanical Engineering)"
    },
    {
      "id": 53,
      "name": "Bachelor Of Real Estate"
    },
    {
      "id": 54,
      "name": "Bachelor Of Construction Management"
    },
    {
      "id": 55,
      "name": "Bachelor Of Quantity Surveying"
    },
    {
      "id": 56,
      "name": "B.a (urban & Regional Planning)"
    },
    {
      "id": 57,
      "name": "Bachelor Of Commerce By Distance"
    },
    {
      "id": 58,
      "name": "Bachelor Of Arts(distance)"
    },
    {
      "id": 59,
      "name": "Bachelor Of Education (arts, B.ed Distance)"
    },
    {
      "id": 60,
      "name": "Bachelor Of Education Arts In History And Geography"
    },
    {
      "id": 61,
      "name": "Bachelor Of Education Arts In History And Cre"
    },
    {
      "id": 62,
      "name": "Bachelor Of Education Arts In Geography And Mathematics"
    },
    {
      "id": 63,
      "name": "Bachelor Of Education Arts In Double Mathematics"
    },
    {
      "id": 64,
      "name": "Bachelor Of Education Arts In Mathematics And Business Studies"
    },
    {
      "id": 65,
      "name": "Bachelor Of Education Arts In Geography And Environmental Studies And Business Studies"
    },
    {
      "id": 66,
      "name": "Bachelor Of Education Arts In English And Literature"
    },
    {
      "id": 67,
      "name": "Bachelor Of Education Science In Physics And Geography And Environmental Studies"
    },
    {
      "id": 68,
      "name": "Bachelor Of Education Science In Double Mathematics"
    },
    {
      "id": 69,
      "name": "Bachelor Of Science In Physics"
    },
    {
      "id": 70,
      "name": "Bachelor Of Science In Industrial Chemistry"
    },
    {
      "id": 71,
      "name": "Bachelor Of Science In Geology"
    },
    {
      "id": 72,
      "name": "Bachelor Of Science In Meteorology"
    },
    {
      "id": 73,
      "name": "Bachelor Of Science In Pure Mathematics"
    },
    {
      "id": 74,
      "name": "Bachelor Of Science In Applied Mathematics"
    },
    {
      "id": 75,
      "name": "Bachelor Of Science In Zoology"
    },
    {
      "id": 76,
      "name": "Bachelor Of Science In Botany"
    },
    {
      "id": 77,
      "name": "Bachelor Of Science In Geography And Environmental Studies"
    },
    {
      "id": 78,
      "name": "Bachelor Of Arts In History"
    },
    {
      "id": 79,
      "name": "Bachelor Of Arts In Tourism"
    },
    {
      "id": 80,
      "name": "Bachelor Of Arts In English Language"
    },
    {
      "id": 81,
      "name": "Bachelor Of Arts In Literature"
    },
    {
      "id": 82,
      "name": "Bachelor Of Arts In Kiswahili"
    },
    {
      "id": 83,
      "name": "Bachelor Of Arts In Communication"
    },
    {
      "id": 84,
      "name": "Bachelor Of Arts In Arabic Studies"
    },
    {
      "id": 85,
      "name": "Bachelor Of Arts Sociology And Social Work"
    },
    {
      "id": 86,
      "name": "Bachelor Of Arts Christian Religious Studies"
    },
    {
      "id": 87,
      "name": "Bachelor Of Arts In Philosophy"
    },
    {
      "id": 88,
      "name": "Bachelor Of Arts In Psychology"
    },
    {
      "id": 89,
      "name": "Bachelor Of Arts In Guidance And Counseling"
    },
    {
      "id": 90,
      "name": "Bachelor Of Arts In Geography And Environmental Studies"
    },
    {
      "id": 91,
      "name": "Bachelor Of Commerce In Accounting"
    },
    {
      "id": 92,
      "name": "Bachelor Of Commerce In Finance"
    },
    {
      "id": 93,
      "name": "Bachelor Of Commerce In Marketing"
    },
    {
      "id": 94,
      "name": "Bachelor Of Commerce In Human Resource Management"
    },
    {
      "id": 95,
      "name": "Bachelor Of Commerce In Insurance And Management"
    },
    {
      "id": 96,
      "name": "Bachelor Of Commerce In Procurement And Purchasing And Supplies"
    },
    {
      "id": 97,
      "name": "Bachelor Of Commerce In Operations Management"
    },
    {
      "id": 98,
      "name": "Bachelor Of Commerce In Business Information Systems"
    },
    {
      "id": 99,
      "name": "Bachelor Of Arts In Political Science And Public Administration"
    },
    {
      "id": 100,
      "name": "B.ed Science By Distance Learning"
    },
    {
      "id": 101,
      "name": "Bachelor Of Education (arts, B. Ed)"
    },
    {
      "id": 102,
      "name": "B.ed.(arts) External Studies"
    },
    {
      "id": 103,
      "name": "B.ed.(science) External Studies"
    },
    {
      "id": 104,
      "name": "Bachelor Of Education (arts)"
    },
    {
      "id": 105,
      "name": "Bachelor Of Education (science)"
    },
    {
      "id": 106,
      "name": "Bachelor Of Education In Early Childhood Education"
    },
    {
      "id": 107,
      "name": "Bachelor Of Education (early Childhood)"
    },
    {
      "id": 108,
      "name": "Bahelor Of Education (ict)"
    },
    {
      "id": 109,
      "name": "B.ed.(arts) By Distance Learning."
    },
    {
      "id": 110,
      "name": "B.ed.(arts) By Distance Learning"
    },
    {
      "id": 111,
      "name": "B.ed.(science) By Distance Learning"
    },
    {
      "id": 112,
      "name": "Bachelors In Project Planning And Management"
    },
    {
      "id": 113,
      "name": "Bachelor Of Education (science)"
    },
    {
      "id": 114,
      "name": "Bachelor In Education (ICT)"
    },
    {
      "id": 115,
      "name": "BSc Computer Science"
    },
    {
      "id": 116,
      "name": "Bachelor Of Education (Physical Education)"
    },
    {
      "id": 117,
      "name": "Bachelor Programmes in Health Sciences"
    },
    {
      "id": 118,
      "name": "BSc. Biochemistry – ( Revised Edition)"
    },
    {
      "id": 119,
      "name": "BSc (biochemistry)"
    },
    {
      "id": 120,
      "name": "B.sc. Human Anatomy"
    },
    {
      "id": 121,
      "name": "Bachelor Of Science In Medical Laboratory Sciences And Technology (BSc Most)"
    },
    {
      "id": 122,
      "name": "Bachelor Of Science In Medical Laboratory Science And Technology"
    },
    {
      "id": 123,
      "name": "Bachelor Of Science (intercalated) (honors) In Medical Physiology"
    },
    {
      "id": 124,
      "name": "B.sc. Human Anatomy(intercalated)"
    },
    {
      "id": 125,
      "name": "Bachelor Of Medicine And Bachelor Of Surgery"
    },
    {
      "id": 126,
      "name": "B.sc. Medical Physiology"
    },
    {
      "id": 127,
      "name": "B.sc. ( Nursing)"
    },
    {
      "id": 128,
      "name": "Bachelor Of Dental Surgery (bds) – 5 Year name"
    },
    {
      "id": 129,
      "name": "Bachelor Of Phar-macy"
    },
    {
      "id": 130,
      "name": "Bachelor Of Arts In Gender And Development"
    },
    {
      "id": 131,
      "name": "Bachelor Of Arts In Anthropology"
    },
    {
      "id": 132,
      "name": "Bachelor Of Economics"
    },
    {
      "id": 133,
      "name": "Bachelor Of Economics & Statistics"
    },
    {
      "id": 134,
      "name": "Bachelor Of Commerce – Finance Option"
    },
    {
      "id": 135,
      "name": "Bachelor Of Commerce- Accounting Option"
    },
    {
      "id": 136,
      "name": "B.a German Studies"
    },
    {
      "id": 137,
      "name": "Bachelor Of Arts In International Studies"
    },
    {
      "id": 138,
      "name": "Bachelor Of Arts In International Studies"
    },
    {
      "id": 139,
      "name": "Bachelor Of Arts (broadcast Production)"
    },
    {
      "id": 140,
      "name": "Bachelor Of Arts (Journalism & Media Studies)"
    },
    {
      "id": 141,
      "name": "Ba Kiswahili"
    },
    {
      "id": 142,
      "name": "Bachelor Of Arts Degree In Korean Studies"
    },
    {
      "id": 143,
      "name": "Communication Skills"
    },
    {
      "id": 144,
      "name": "Bachelor Of Law(ll.b)"
    },
    {
      "id": 145,
      "name": "Bachelor Of Arts"
    },
    {
      "id": 146,
      "name": "Bachelor Of Arts In Literature"
    },
    {
      "id": 147,
      "name": "Bachelor Of Arts In Performing Arts"
    },
    {
      "id": 148,
      "name": "Bachelor Of Commerce"
    },
    {
      "id": 149,
      "name": "Bachelor Of Psychology (counseling)"
    },
    {
      "id": 150,
      "name": "Bachelor Of Arts In Psychology"
    },
    {
      "id": 151,
      "name": "Bachelor Of Arts In Social Work"
    },
    {
      "id": 152,
      "name": "Bachelor Of Arts In Sociology"
    },
    {
      "id": 153,
      "name": "Bachelor Of Criminology And Criminal Justice"
    },
    {
      "id": 154,
      "name": "Bachelor Of Education (science)"
    },
    {
      "id": 155,
      "name": "Bachelor In Education (ICT)"
    },
    {
      "id": 156,
      "name": "BSc Computer Science"
    },
    {
      "id": 157,
      "name": "Bachelors Of Law"
    },
    {
      "id": 158,
      "name": "Bachelor Of Arts"
    },
    {
      "id": 159,
      "name": "Bachelor Of Commerce"
    },
    {
      "id": 160,
      "name": "Bachelor Of Project Planning And Management"
    },
    {
      "id": 161,
      "name": "Bachelor Of Education (arts) – Distance Studies"
    },
    {
      "id": 162,
      "name": "Bachelor Of Economics"
    },
    {
      "id": 163,
      "name": "Bachelor Of Economics & Statistics"
    },
    {
      "id": 164,
      "name": "Bachelor Of Education (arts)"
    },
    {
      "id": 165,
      "name": "Bachelor Of Education (science)"
    },
    {
      "id": 166,
      "name": "Bachelor Of Education (Early Childhood)"
    },
    {
      "id": 167,
      "name": "Bachelor Of Education (ICT)"
    },
    {
      "id": 168,
      "name": "Bachelor Of Law(ll.b)"
    },
    {
      "id": 169,
      "name": "Bachelor Of Education (arts )- External Studies"
    },
    {
      "id": 170,
      "name": "Bachelor Of Arts"
    },
    {
      "id": 171,
      "name": "Bachelor Of Adult Education And Community Development"
    },
    {
      "id": 172,
      "name": "Bachelor Of Law (LLB)"
    },
    {
      "id": 173,
      "name": "Bachelor Of Project Planning And Management"
    },
    {
      "id": 174,
      "name": "Bachelor Of Commerce"
    },
    {
      "id": 175,
      "name": "Bachelor Of Commerce By Distance"
    },
    {
      "id": 176,
      "name": "Bachelor Of Arts(distance)"
    },
    {
      "id": 177,
      "name": "Bachelor Of Education (arts, B.ed Distance)"
    },
    {
      "id": 178,
      "name": "B.ed Science By Distance Learning"
    },
    {
      "id": 179,
      "name": "Bachelor Of Education (arts, B. Ed)"
    },
    {
      "id": 180,
      "name": "B.ed. (arts) – Mathematics And Economics)"
    },
    {
      "id": 181,
      "name": "B.ed (arts) Linguistics And Literature"
    },
    {
      "id": 182,
      "name": "B.ed (arts) Mathematics And Geography"
    },
    {
      "id": 183,
      "name": "B.ed (arts) Kiswahili And Religious Studies"
    },
    {
      "id": 184,
      "name": "B.ed (arts) History And Religious Studies"
    },
    {
      "id": 185,
      "name": "B.ed (arts) History And Economics"
    },
    {
      "id": 186,
      "name": "B.ed (arts) Geography And History"
    },
    {
      "id": 187,
      "name": "B.ed (arts) Business And Mathematics"
    },
    {
      "id": 188,
      "name": "B.ed (arts) Business And Economics"
    },
    {
      "id": 189,
      "name": "B.ed (arts) Kiswahili And Literature"
    },
    {
      "id": 190,
      "name": "B.ed (arts) History And Kiswahili"
    },
    {
      "id": 191,
      "name": "B.ed (arts) Geography And Religious Studies"
    },
    {
      "id": 192,
      "name": "B.ed (arts) Geography And Economics"
    },
    {
      "id": 193,
      "name": "B.ed (arts) Business And Geography"
    },
    {
      "id": 194,
      "name": "Bachelor Of Science Agricultural Education And Extention (b.sc. Ae&e)"
    },
    {
      "id": 195,
      "name": "Bachelor Of Sciences (b.sc)"
    },
    {
      "id": 196,
      "name": "Bachelor Of Education (science) (b.ed.sc)"
    },
    {
      "id": 197,
      "name": "Bachelor Of Education In Early Childhood Education"
    },
    {
      "id": 198,
      "name": "Bachelor Of Education (arts)"
    },
    {
      "id": 199,
      "name": "Bachelor Of Arts"
    }
  ];
                                                                                                                                                                                                                                                                                                                                                                                                  
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
(!course) ? res.status(404).send('The course with the given ID was not found.') : res.send(course);
});

app.post('/api/courses', (req, res) => {    
   
    const { error } = validateCourse(req.body);

    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };  
    courses.push(course);   
    res.send(course);   
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    const { error } = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
      
    });
    
    return schema.validate(course);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


