export const ManagersColumns = [
  { field: "name", headerName: "Team Name", width: 130 },
  { field: "manager", headerName: "Manager", width: 130 },

  { field: "totalAm", headerName: "Total Am", width: 90 },
  { field: "totalTl", headerName: "Total Tl", width: 90 },
  { field: "totalExecutive", headerName: "Total Executive", width: 120 },
];

export const AssistantManagersColumns = [
  { field: "name", headerName: "Name", width: 250 },
  { field: "managerName", headerName: "Manager", width: 170 },
];

export const TeamLeadColumns = [
  { field: "name", headerName: "Name", width: 160 },
  { field: "amName", headerName: "Assistant Manager", width: 180 },
  { field: "managerName", headerName: "Manager", width: 170 },
];

export const ExecutiveColumn = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "teamLeadName", headerName: "Tl", width: 140 },
  { field: "amName", headerName: "Assistant Manager", width: 140 },
  { field: "managerName", headerName: "Manager", width: 150 },
];

export const TeamMembersColumns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "role", headerName: "Role", width: 200 },
].map((c) => ({ ...c, editable: true }));

export const TEAMS_DATA = [
  {
    id: "1jkkbd234232131",
    name: "Team A",
    manager: "Pardeep Kumar",
    totalAm: 2,
    totalTl: 4,
    totalExecutive: 14,
    am: [
      {
        id: "1jkkbd234232dsdsan34434q",
        name: "Mohit Sharma",
        managerName: "Pardeep Kumar",
        tl: [
          {
            id: "1jkkbd234232dsdsan34434p",
            name: "Rohit Mahajan",
            teamLeadName: "Rohit Mahajan",
            managerName: "Pardeep Kumar",
            amName: "Mohit Sharma",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434n",
                name: "Bharti",
                teamLeadName: "Rohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434o",
                name: "Sandeep",
                teamLeadName: "Rohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434nf",
                name: "Koshal",
                teamLeadName: "Rohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434od",
                name: "Pryinka",
                teamLeadName: "Rohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
            ],
          },
          {
            id: "1jkkbd234232dsdsan34434o",
            name: "Nugen Mahajan",
            teamLeadName: "Nugen Mahajan",
            managerName: "Pardeep Kumar",
            amName: "Mohit Sharma",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434l",
                name: "Parshotam",
                teamLeadName: "Nugen Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434m",
                name: "Gungun",
                teamLeadName: "Nugen Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434ns",
                name: "Mahadav",
                teamLeadName: "Nugen Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
              {
                id: "1jkkbd234232dsdsan34434ow",
                name: "Saruchi",
                teamLeadName: "Nugen Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Mohit Sharma",
              },
            ],
          },
        ],
      },
      {
        id: "1jkkbd234232dsdsan34434k",
        name: "Gurdeep Singh",
        managerName: "Pardeep Kumar",
        tl: [
          {
            id: "1jkkbd234232dsdsan34434j",
            name: "Karan Mahajan",
            teamLeadName: "Karan Mahajan",
            managerName: "Pardeep Kumar",
            amName: "Gurdeep Singh",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434f",
                name: "Ram",
                teamLeadName: "Karan Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
              {
                id: "1jkkbd234232dsdsan34434g",
                name: "Sham",
                teamLeadName: "Karan Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
              {
                id: "1jkkbd234232dsdsan34434h",
                name: "John",
                teamLeadName: "Karan Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
              {
                id: "1jkkbd234232dsdsan34434i",
                name: "Tom",
                teamLeadName: "Karan Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
            ],
          },
          {
            id: "1jkkbd234232dsdsan34434jhnu",
            name: "Mohit Mahajan",
            teamLeadName: "Mohit Mahajan",
            managerName: "Pardeep Kumar",
            amName: "Gurdeep Singh",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434d",
                name: "John",
                teamLeadName: "Mohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
              {
                id: "1jkkbd234232dsdsan34434e",
                name: "Tom",
                teamLeadName: "Mohit Mahajan",
                managerName: "Pardeep Kumar",
                amName: "Gurdeep Singh",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1jkkbd234232132",
    name: "Team B",
    manager: "Hardeep Kumar",
    totalAm: 1,
    totalTl: 2,
    totalExecutive: 8,
    am: [
      {
        id: "1jkkbd234232134",
        name: "Sumit Kumar",
        managerName: "Hardeep Kumar",
        tl: [
          {
            id: "1jkkbd234232dsa13dfr",
            name: "Rohit Mahajan",
            managerName: "Hardeep Kumar",
            amName: "Sumit Kumar",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434v",
                name: "Rohan",
                teamLeadName: "Rohit Mahajan",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsafsdf32424g",
                name: "Sohan",
                teamLeadName: "Rohit Mahajan",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsalj09782w",
                name: "Mohan",
                teamLeadName: "Rohit Mahajan",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsacnjlbsa5s",
                name: "Gohan",
                teamLeadName: "Rohit Mahajan",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
            ],
          },
          {
            id: "1jkkbd234232dsa13dfr1",
            name: "Amandeep Kaur",
            teamLeadName: "Amandeep Kaur",
            managerName: "Hardeep Kumar",
            amName: "Sumit Kumar",
            executive: [
              {
                id: "1jkkbd234232dsdsan34434x",
                name: "Raman",
                teamLeadName: "Amandeep Kaur",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsafsdf32424a",
                name: "Aman",
                teamLeadName: "Amandeep Kaur",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsalj09782z",
                name: "Pawan",
                teamLeadName: "Amandeep Kaur",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
              {
                id: "1jkkbd234232dsacnjlbsa5l",
                name: "Shanav",
                teamLeadName: "Amandeep Kaur",
                managerName: "Hardeep Kumar",
                amName: "Sumit Kumar",
              },
            ],
          },
        ],
      },
    ],
  },
  // Added more managers below
  {
    id: "1jkkbd234232133",
    name: "Team C",
    manager: "Sandeep Kumar",
    totalAm: 1,
    totalTl: 2,
    totalExecutive: 0,
    am: [
      {
        id: "1jkkbd234232xyz",
        name: "Kavita Kumari",
        managerName: "Sandeep Kumar",
        tl: [
          {
            id: "1jkkbd234232qwe",
            name: "Ravi Singh",
            teamLeadName: "Ravi Singh",
            managerName: "Sandeep Kumar",
            amName: "Kavita Kumari",
            executive: [
              // Add Executives for this TL
            ],
          },
          {
            id: "1jkkbd234232rew",
            name: "Ajay Yadav",
            teamLeadName: "Ajay Yadav",
            managerName: "Sandeep Kumar",
            amName: "Kavita Kumari",
            executive: [
              // Add Executives for this TL
            ],
          },
        ],
      },
    ],
  },
];

export const Client_columns = [
  {
    field: "company",
    headerName: "Company Name",
    width: 320,
    editable: false,
  },
  {
    field: "address",
    headerName: "Address",
    width: 360,
    editable: false,
  },
  {
    field: "industry",
    headerName: "Industry",
    width: 330,
    editable: false,
  },
];

export const client_employeesColumns = [
  {
    field: "name",
    headerName: "Employee Name",
    width: 200,
    editable: false,
  },

  {
    field: "designation",
    headerName: "Employee Desigination",
    width: 200,
    editable: false,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
    editable: false,
  },

  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: false,
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 150,
    editable: false,
  },
];

export const CLIENT_DATA = [
  {
    id: 1,
    company: "Capita Tech",
    address: "123 Tech Lane, Silicon Valley, CA",
    industry: "Technology",
    employees: [
      {
        id: 1001,
        name: "Vikas Tripathi",
        designation: "Manager",
        department: "Sales",
        email: "vikas@capitatech.com",
        contact: "9857498654",
      },
      {
        id: 1002,
        name: "Pooja Sharma",
        designation: "HR Specialist",
        department: "Human Resources",
        email: "pooja.sharma@capitatech.com",
        contact: "9988771122",
      },
      {
        id: 1003,
        name: "Ravi Patel",
        designation: "Software Engineer",
        department: "IT",
        email: "ravi.patel@capitatech.com",
        contact: "9876543210",
      },
      {
        id: 1004,
        name: "Anjali Gupta",
        designation: "Marketing Lead",
        department: "Marketing",
        email: "anjali.gupta@capitatech.com",
        contact: "9865321470",
      },
    ],
  },
  {
    id: 2,
    company: "Godrej",
    address: "12 Industrial Area, Mumbai, India",
    industry: "Manufacturing",
    employees: [
      {
        id: 2001,
        name: "Amit Mehra",
        designation: "Operations Head",
        department: "Manufacturing",
        email: "amit@godrej.com",
        contact: "9123456789",
      },
      {
        id: 2002,
        name: "Neha Jain",
        designation: "Logistics Manager",
        department: "Logistics",
        email: "neha.jain@godrej.com",
        contact: "9234567890",
      },
      {
        id: 2003,
        name: "Arjun Desai",
        designation: "Production Lead",
        department: "Manufacturing",
        email: "arjun.desai@godrej.com",
        contact: "9345678901",
      },
      {
        id: 2004,
        name: "Sanya Kapoor",
        designation: "HR Manager",
        department: "HR",
        email: "sanya.kapoor@godrej.com",
        contact: "9876123456",
      },
    ],
  },
  {
    id: 3,
    company: "Videocon",
    address: "45 Electronics Avenue, Gurgaon, India",
    industry: "Consumer Electronics",
    employees: [
      {
        id: 3001,
        name: "Sonia Kapoor",
        designation: "Senior Engineer",
        department: "R&D",
        email: "sonia@videocon.com",
        contact: "8899776655",
      },
      {
        id: 3002,
        name: "Rajesh Kumar",
        designation: "Design Lead",
        department: "Design",
        email: "rajesh@videocon.com",
        contact: "9888765432",
      },
      {
        id: 3003,
        name: "Megha Reddy",
        designation: "Marketing Lead",
        department: "Marketing",
        email: "megha@videocon.com",
        contact: "8123456789",
      },
      {
        id: 3004,
        name: "Vikram Singh",
        designation: "Product Manager",
        department: "Product Development",
        email: "vikram@videocon.com",
        contact: "7887654321",
      },
    ],
  },
  {
    id: 4,
    company: "Intel",
    address: "2200 Mission College Blvd, Santa Clara, CA",
    industry: "Semiconductors",
    employees: [
      {
        id: 4001,
        name: "John Smith",
        designation: "Product Manager",
        department: "Hardware",
        email: "john.smith@intel.com",
        contact: "7867861234",
      },
      {
        id: 4002,
        name: "Andrew Jones",
        designation: "Chip Designer",
        department: "Semiconductor Design",
        email: "andrew.jones@intel.com",
        contact: "7894561230",
      },
      {
        id: 4003,
        name: "Emma Brown",
        designation: "Software Engineer",
        department: "Software",
        email: "emma.brown@intel.com",
        contact: "7958623145",
      },
      {
        id: 4004,
        name: "Michael Clark",
        designation: "Research Scientist",
        department: "R&D",
        email: "michael.clark@intel.com",
        contact: "7569832109",
      },
    ],
  },
  {
    id: 5,
    company: "AMD",
    address: "2485 Augustine Drive, Santa Clara, CA",
    industry: "Semiconductors",
    employees: [
      {
        id: 5001,
        name: "Emily Davis",
        designation: "Software Architect",
        department: "Software",
        email: "emily.davis@amd.com",
        contact: "6786784567",
      },
      {
        id: 5002,
        name: "Robert King",
        designation: "Senior Engineer",
        department: "Engineering",
        email: "robert.king@amd.com",
        contact: "6655443322",
      },
      {
        id: 5003,
        name: "Laura Harris",
        designation: "Product Lead",
        department: "Product Management",
        email: "laura.harris@amd.com",
        contact: "6777888999",
      },
      {
        id: 5004,
        name: "James Miller",
        designation: "Systems Architect",
        department: "IT",
        email: "james.miller@amd.com",
        contact: "6611223344",
      },
    ],
  },
  {
    id: 6,
    company: "Tech Mahindra",
    address: "Sharda Centre, Pune, India",
    industry: "IT Services",
    employees: [
      {
        id: 6001,
        name: "Rajesh Kumar",
        designation: "IT Consultant",
        department: "Consulting",
        email: "rajesh@techmahindra.com",
        contact: "9988776655",
      },
      {
        id: 6002,
        name: "Sita Rani",
        designation: "Project Manager",
        department: "Project Management",
        email: "sita.rani@techmahindra.com",
        contact: "9123456789",
      },
      {
        id: 6003,
        name: "Ankit Joshi",
        designation: "Software Developer",
        department: "Software",
        email: "ankit.joshi@techmahindra.com",
        contact: "9222333444",
      },
      {
        id: 6004,
        name: "Rohit Yadav",
        designation: "Business Analyst",
        department: "Analysis",
        email: "rohit.yadav@techmahindra.com",
        contact: "9988771122",
      },
    ],
  },
];

export const events_columns = [
  {
    field: "eventName",
    headerName: "Event Name",
    width: 180,
    editable: true,
  },

  {
    field: "eventDetails",
    headerName: "Event Details",
    width: 180,
    editable: true,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    width: 120,
    type: "string",
  },
  { field: "location", headerName: "Location", width: 150 },
  { field: "organizer", headerName: "Client Name", width: 150 },
  { field: "type", headerName: "Type", width: 120 },
  { field: "beginDate", headerName: "Begin Date", width: 100 },
  { field: "endDate", headerName: "End Date", width: 100 },
  { field: "remarks", headerName: "remarks", width: 100 },
  { field: "assignedTo", headerName: "Assigned To", width: 100 },
];

export const task_columns = [
  {
    field: "taskName",
    headerName: "Task Name",
    width: 180,
    editable: true,
  },

  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 180,
    editable: true,
  },
];

export const EVENTS_DATA = [
  {
    id: 1,
    eventName: "Annual Meeting",
    eventDate: "2024-01-10",
    location: "New York",
    organizer: "John Doe",
    type: "Meeting",
    beginDate: "2024-01-18",
    endDate: "2024-01-19",
    task: [
      { id: 101, taskName: "Food Catering", assignedTo: "Soravh Mishra" },
      { id: 102, taskName: "AV Setup", assignedTo: "John Smith" },
      { id: 103, taskName: "Seating Arrangement", assignedTo: "Alice Brown" },
      { id: 104, taskName: "Guest Invitations", assignedTo: "Bob White" },
      { id: 105, taskName: "Event Documentation", assignedTo: "Charlie Black" },
    ],
  },
  {
    id: 2,
    eventName: "Tech Conference",
    eventDate: "2024-02-15",
    location: "San Francisco",
    organizer: "Jane Smith",
    type: "Conference",
    beginDate: "2024-01-19",
    endDate: "2024-01-20",
    task: [
      {
        id: 201,
        taskName: "Speaker Coordination",
        assignedTo: "Pardeep Singh",
      },
      { id: 202, taskName: "Tech Setup", assignedTo: "Ravi Kumar" },
      { id: 203, taskName: "Catering", assignedTo: "Shivani Gupta" },
      { id: 204, taskName: "Venue Decoration", assignedTo: "Sandeep Yadav" },
      { id: 205, taskName: "Event Promotion", assignedTo: "Priya Sharma" },
    ],
  },
  {
    id: 3,
    eventName: "Charity Gala",
    eventDate: "2024-03-20",
    location: "Chicago",
    organizer: "Alice Brown",
    type: "Gala",
    beginDate: "2024-03-15",
    endDate: "2024-03-16",
    task: [
      {
        id: 301,
        taskName: "Sponsorship Management",
        assignedTo: "Ellen Green",
      },
      { id: 302, taskName: "Auction Setup", assignedTo: "George King" },
      { id: 303, taskName: "Guest Registration", assignedTo: "Linda Carter" },
      { id: 304, taskName: "Food Catering", assignedTo: "Simon Powell" },
      { id: 305, taskName: "Media Coverage", assignedTo: "Sarah Lee" },
    ],
  },
  {
    id: 4,
    eventName: "Sports Day",
    eventDate: "2024-04-25",
    location: "Los Angeles",
    organizer: "Bob White",
    type: "Sports Event",
    beginDate: "2024-04-20",
    endDate: "2024-04-22",
    task: [
      { id: 401, taskName: "Team Registration", assignedTo: "Nancy Davis" },
      { id: 402, taskName: "Equipment Setup", assignedTo: "Mike Taylor" },
      { id: 403, taskName: "Food and Drinks", assignedTo: "Rachel Moore" },
      { id: 404, taskName: "Crowd Control", assignedTo: "Tom Harris" },
      {
        id: 405,
        taskName: "Scoreboard Management",
        assignedTo: "Daniel Foster",
      },
    ],
  },
  {
    id: 5,
    eventName: "Product Launch",
    eventDate: "2024-05-05",
    location: "Boston",
    organizer: "Charlie Black",
    type: "Product Launch",
    beginDate: "2024-05-01",
    endDate: "2024-05-03",
    task: [
      { id: 501, taskName: "Product Demo", assignedTo: "Harry Collins" },
      {
        id: 502,
        taskName: "Social Media Promotion",
        assignedTo: "Sophie Scott",
      },
      { id: 503, taskName: "Venue Setup", assignedTo: "Liam Martin" },
      { id: 504, taskName: "Guest Invitations", assignedTo: "Olivia Harris" },
      { id: 505, taskName: "Logistics", assignedTo: "Lucas Young" },
    ],
  },
  {
    id: 6,
    eventName: "Annual Awards Ceremony",
    eventDate: "2024-06-15",
    location: "Los Angeles",
    organizer: "Jennifer Lee",
    type: "Award Ceremony",
    beginDate: "2024-06-10",
    endDate: "2024-06-12",
    task: [
      { id: 601, taskName: "Award Trophies", assignedTo: "Kevin Clark" },
      { id: 602, taskName: "Red Carpet", assignedTo: "Sandra Wilson" },
      { id: 603, taskName: "Host and MC", assignedTo: "Grace Taylor" },
      { id: 604, taskName: "Lighting Setup", assignedTo: "Jack Lee" },
      { id: 605, taskName: "Sound and Music", assignedTo: "Mia Roberts" },
    ],
  },
  {
    id: 7,
    eventName: "Team Building Retreat",
    eventDate: "2024-07-20",
    location: "Miami",
    organizer: "Mark Davis",
    type: "Retreat",
    beginDate: "2024-07-18",
    endDate: "2024-07-19",
    task: [
      { id: 701, taskName: "Outdoor Activities", assignedTo: "Andrew King" },
      { id: 702, taskName: "Lodging Arrangements", assignedTo: "Monica Bell" },
      { id: 703, taskName: "Catering", assignedTo: "Sam Green" },
      { id: 704, taskName: "Group Facilitation", assignedTo: "Rachel Brown" },
      { id: 705, taskName: "Transportation", assignedTo: "Ethan Walker" },
    ],
  },
  {
    id: 8,
    eventName: "Fashion Show",
    eventDate: "2024-08-10",
    location: "Paris",
    organizer: "Sophia Jackson",
    type: "Fashion Event",
    beginDate: "2024-08-05",
    endDate: "2024-08-07",
    task: [
      { id: 801, taskName: "Model Selection", assignedTo: "Olivia Martin" },
      { id: 802, taskName: "Runway Setup", assignedTo: "Isabella Thomas" },
      { id: 803, taskName: "Styling", assignedTo: "Emily Hall" },
      { id: 804, taskName: "Ticketing", assignedTo: "Ella Lewis" },
      { id: 805, taskName: "Photography", assignedTo: "Lily White" },
    ],
  },
  {
    id: 9,
    eventName: "Charity Auction",
    eventDate: "2024-09-05",
    location: "London",
    organizer: "Mason Moore",
    type: "Auction",
    beginDate: "2024-09-01",
    endDate: "2024-09-03",
    task: [
      { id: 901, taskName: "Item Collection", assignedTo: "Chloe Brown" },
      { id: 902, taskName: "Bid Management", assignedTo: "David White" },
      { id: 903, taskName: "Catering", assignedTo: "James Green" },
      { id: 904, taskName: "Venue Setup", assignedTo: "Ella Clark" },
      { id: 905, taskName: "Marketing", assignedTo: "Grace Wilson" },
    ],
  },
  {
    id: 10,
    eventName: "Film Premiere",
    eventDate: "2024-10-15",
    location: "Hollywood",
    organizer: "Victor Black",
    type: "Premiere",
    beginDate: "2024-10-10",
    endDate: "2024-10-12",
    task: [
      { id: 1001, taskName: "Red Carpet", assignedTo: "Sophia Harris" },
      { id: 1002, taskName: "Seating Arrangement", assignedTo: "Michael Lee" },
      { id: 1003, taskName: "Sound and Music", assignedTo: "Olivia James" },
      { id: 1004, taskName: "Catering", assignedTo: "Lucas Brown" },
      { id: 1005, taskName: "Security", assignedTo: "Nathan Clark" },
    ],
  },
];

export const VENDORS_DATA = [
  {
    id: "1081",
    name: "Kumar Printing Press",
    address: "ABC Chownk, Complex 1, Kashmir",
    companyName: "Kumar Printing Press",
    telephone: "41518412154",
    email: "kumarpress@gmail.com",
    categories: "Bulk",
    workType: "Shirts Printing",
    headOffice: "Jammu",
    tasks: [
      {
        id: "1231",
        taskName: "Print 500 shirts",
        allocationDate: "25/11/24",
        deliveryDate: "11/12/24",
      },
      {
        id: "1234",
        taskName: "Print 1000 shirts",
        allocationDate: "01/09/24",
        deliveryDate: "04/09/24",
      },
    ],
    operationalCities: [
      { id: "0893u2", name: "Baramulla" },
      { id: "0893u4", name: "Kulgam" },
      { id: "0893u5", name: "PehalGam" },
    ],
    vendorEmployees: [
      {
        id: "emp1",
        name: "Rajesh Kumar",
        address: "Kashmir, Complex 2",
        contact: "9812345678",
        email: "rajesh.kumar@gmail.com",
        workCategory: "Printing",
        workType: "Shirts Printing",
      },
      {
        id: "emp2",
        name: "Priya Sharma",
        address: "Baramulla",
        contact: "9823456789",
        email: "priya.sharma@gmail.com",
        workCategory: "Printing",
        workType: "Shirts Printing",
      },
    ],
  },
  {
    id: "1082",
    name: "Evergreen Packaging",
    address: "Street 45, Sector B, Delhi",
    companyName: "Evergreen Pack",
    telephone: "41618412155",
    email: "evergreenpack@gmail.com",
    categories: "Packaging",
    workType: "Box Packaging",
    headOffice: "Delhi",
    tasks: [
      {
        id: "2231",
        taskName: "Pack 500 boxes",
        allocationDate: "10/10/24",
        deliveryDate: "20/10/24",
      },
      {
        id: "2234",
        taskName: "Pack 2000 boxes",
        allocationDate: "05/11/24",
        deliveryDate: "10/11/24",
      },
      {
        id: "2235",
        taskName: "Pack 300 boxes",
        allocationDate: "15/11/24",
        deliveryDate: "25/11/24",
      },
    ],
    operationalCities: [
      { id: "0893u6", name: "Noida" },
      { id: "0893u7", name: "Ghaziabad" },
      { id: "0893u8", name: "Faridabad" },
      { id: "0893u9", name: "Kolkata" },
      { id: "0892u9", name: "Ahmedabad" },
    ],
    vendorEmployees: [
      {
        id: "emp3",
        name: "Arjun Gupta",
        address: "Delhi, Sector B",
        contact: "9812456789",
        email: "arjun.gupta@gmail.com",
        workCategory: "Packaging",
        workType: "Box Packaging",
      },
      {
        id: "emp4",
        name: "Meera Nair",
        address: "Ghaziabad",
        contact: "9823467890",
        email: "meera.nair@gmail.com",
        workCategory: "Packaging",
        workType: "Box Packaging",
      },
    ],
  },
  {
    id: "1083",
    name: "Elite Garments",
    address: "Block C, Industrial Area, Mumbai",
    companyName: "Elite Garments Pvt Ltd",
    telephone: "41618412156",
    email: "elitegarments@gmail.com",
    categories: "Clothing",
    workType: "Garments Manufacturing",
    headOffice: "Mumbai",
    tasks: [
      {
        id: "3231",
        taskName: "Manufacture 1000 T-shirts",
        allocationDate: "15/08/24",
        deliveryDate: "30/08/24",
      },
      {
        id: "3234",
        taskName: "Manufacture 500 trousers",
        allocationDate: "05/09/24",
        deliveryDate: "20/09/24",
      },
    ],
    operationalCities: [
      { id: "0893u9", name: "Pune" },
      { id: "0893u10", name: "Nashik" },
      { id: "0893u11", name: "Nagpur" },
      { id: "0088898", name: "Chennai" },
    ],
    vendorEmployees: [
      {
        id: "emp5",
        name: "Manoj Deshmukh",
        address: "Mumbai, Block C",
        contact: "9813567890",
        email: "manoj.deshmukh@gmail.com",
        workCategory: "Garments",
        workType: "Garments Manufacturing",
      },
      {
        id: "emp6",
        name: "Sneha Patel",
        address: "Pune",
        contact: "9824567891",
        email: "sneha.patel@gmail.com",
        workCategory: "Garments",
        workType: "Garments Manufacturing",
      },
    ],
  },
];

export const TASK_COLUMNS = [
  {
    field: "taskName",
    headerName: "Task Name",
    width: 180,
    editable: true,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 180,
    editable: true,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 180,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    editable: true,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    width: 180,
    editable: true,
  },
];

export const TASK_DATA = [
  {
    id: 101,
    taskName: "Food Catering",
    assignedTo: "Soravh Mishra",
    dueDate: "05/15/24",
    status: "In Progress",
    vendor: "Ravi Sharma",
  },
  {
    id: 102,
    taskName: "AV Setup",
    assignedTo: "John Smith",
    dueDate: "05/16/24",
    status: "Pending",
    vendor: "Suresh Patil",
  },
  {
    id: 103,
    taskName: "Seating Arrangement",
    assignedTo: "Alice Brown",
    dueDate: "05/17/24",
    status: "In Progress",
    vendor: "Ajay Kumar",
  },
  {
    id: 104,
    taskName: "Guest Invitations",
    assignedTo: "Bob White",
    dueDate: "05/18/24",
    status: "Not Started",
    vendor: "Ramesh Verma",
  },
  {
    id: 105,
    taskName: "Event Documentation",
    assignedTo: "Charlie Black",
    dueDate: "05/19/24",
    status: "Pending",
    vendor: "Pooja Singh",
  },
];

export const COMMENTS_COLUMNS = [
  {
    field: "details",
    headerName: "Details",
    width: 450,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 180,
    editable: true,
  },
  {
    field: "postedBy",
    headerName: "Posted By",
    width: 180,
    editable: true,
  },
];

export const COMMENTS_ROWS = [
  {
    id: 1,
    details: "The new feature works great!",
    date: "2024-12-10",
    postedBy: "Alice",
  },
  {
    id: 2,
    details: "Found a small bug in the UI.",
    date: "2024-12-09",
    postedBy: "Bob",
  },
  {
    id: 3,
    details: "Could we add more options to the dropdown?",
    date: "2024-12-08",
    postedBy: "Charlie",
  },
  {
    id: 4,
    details: "Documentation is clear and helpful.",
    date: "2024-12-07",
    postedBy: "Diana",
  },
  {
    id: 5,
    details: "Performance has improved significantly.",
    date: "2024-12-06",
    postedBy: "Eve",
  },
];

export const USER_COLUMNS = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "contact", headerName: "Contact", width: 150 },
  { field: "designation", headerName: "Designation", width: 150 },
];

export const USER_ROWS = [
  {
    id: 5,
    name: "Chris Evans",
    role: "Manager",
    email: "chris.evans@example.com",
    contact: "789-123-4560",
    designation: "Manager",
  },
  {
    id: 13,
    name: "Lucas Harris",
    role: "Manager",
    email: "lucas.harris@example.com",
    contact: "901-234-5678",
    designation: "Manager",
  },
  {
    id: 25,
    name: "William Phillips",
    role: "Manager",
    email: "william.phillips@example.com",
    contact: "404-516-1718",
    designation: "Manager",
  },
  {
    id: 8,
    name: "Sophia Miller",
    role: "Assistant Manager",
    email: "sophia.miller@example.com",
    contact: "678-901-2345",
    designation: "Assistant Manager",
  },
  {
    id: 18,
    name: "Charlotte Lee",
    role: "Assistant Manager",
    email: "charlotte.lee@example.com",
    contact: "123-456-7899",
    designation: "Assistant Manager",
  },
  {
    id: 15,
    name: "Mason Martinez",
    role: "Team Lead",
    email: "mason.martinez@example.com",
    contact: "567-901-2345",
    designation: "Team Lead",
  },
  {
    id: 23,
    name: "Benjamin Adams",
    role: "Team Lead",
    email: "benjamin.adams@example.com",
    contact: "202-131-4151",
    designation: "Team Lead",
  },
  {
    id: 1,
    name: "John Doe",
    role: "Executive",
    email: "john.doe@example.com",
    contact: "123-456-7890",
    designation: "Executive",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Executive",
    email: "jane.smith@example.com",
    contact: "987-654-3210",
    designation: "Executive",
  },
  {
    id: 3,
    name: "Alice Brown",
    role: "Executive",
    email: "alice.brown@example.com",
    contact: "456-789-1230",
    designation: "Executive",
  },
  {
    id: 4,
    name: "Bob Johnson",
    role: "Executive",
    email: "bob.johnson@example.com",
    contact: "654-321-0987",
    designation: "Executive",
  },
  {
    id: 6,
    name: "Emma Watson",
    role: "Executive",
    email: "emma.watson@example.com",
    contact: "321-654-9870",
    designation: "Executive",
  },
  {
    id: 7,
    name: "Liam Wilson",
    role: "Executive",
    email: "liam.wilson@example.com",
    contact: "234-567-8901",
    designation: "Executive",
  },
  {
    id: 9,
    name: "Noah Davis",
    role: "Executive",
    email: "noah.davis@example.com",
    contact: "890-123-4567",
    designation: "Executive",
  },
  {
    id: 10,
    name: "Mia Taylor",
    role: "Executive",
    email: "mia.taylor@example.com",
    contact: "567-890-1234",
    designation: "Executive",
  },
  {
    id: 11,
    name: "Ethan Moore",
    role: "Executive",
    email: "ethan.moore@example.com",
    contact: "456-123-7890",
    designation: "Executive",
  },
  {
    id: 12,
    name: "Ava White",
    role: "Executive",
    email: "ava.white@example.com",
    contact: "789-234-5671",
    designation: "Executive",
  },
  {
    id: 14,
    name: "Isabella Clark",
    role: "Executive",
    email: "isabella.clark@example.com",
    contact: "345-678-9012",
    designation: "Executive",
  },
  {
    id: 16,
    name: "Olivia Garcia",
    role: "Executive",
    email: "olivia.garcia@example.com",
    contact: "890-345-6789",
    designation: "Executive",
  },
  {
    id: 17,
    name: "Aiden Hernandez",
    role: "Executive",
    email: "aiden.hernandez@example.com",
    contact: "234-890-1234",
    designation: "Executive",
  },
  {
    id: 19,
    name: "Elijah King",
    role: "Executive",
    email: "elijah.king@example.com",
    contact: "987-654-3200",
    designation: "Executive",
  },
  {
    id: 20,
    name: "Amelia Scott",
    role: "Executive",
    email: "amelia.scott@example.com",
    contact: "345-678-9001",
    designation: "Executive",
  },
  {
    id: 21,
    name: "James Green",
    role: "Executive",
    email: "james.green@example.com",
    contact: "789-101-1121",
    designation: "Executive",
  },
  {
    id: 22,
    name: "Abigail Young",
    role: "Executive",
    email: "abigail.young@example.com",
    contact: "101-112-1314",
    designation: "Executive",
  },
  {
    id: 24,
    name: "Evelyn Baker",
    role: "Executive",
    email: "evelyn.baker@example.com",
    contact: "303-415-1617",
    designation: "Executive",
  },
  {
    id: 26,
    name: "Harper Carter",
    role: "Executive",
    email: "harper.carter@example.com",
    contact: "505-617-1819",
    designation: "Executive",
  },
  {
    id: 27,
    name: "Henry Mitchell",
    role: "Executive",
    email: "henry.mitchell@example.com",
    contact: "606-718-1920",
    designation: "Executive",
  },
  {
    id: 28,
    name: "Emily Perez",
    role: "Executive",
    email: "emily.perez@example.com",
    contact: "707-819-2021",
    designation: "Executive",
  },
  {
    id: 29,
    name: "Michael Hall",
    role: "Executive",
    email: "michael.hall@example.com",
    contact: "808-920-2122",
    designation: "Executive",
  },
  {
    id: 30,
    name: "Ella Turner",
    role: "Executive",
    email: "ella.turner@example.com",
    contact: "909-101-2223",
    designation: "Executive",
  },
];

export const HELP_DRAWER_TIPS = {
  "/vendors": [
    "Manage your list of vendors and their details here.",
    "Click on a vendor to see their products, services, and agreements.",
    "You can add, update, or remove vendor information as needed.",
    "Select a vendor to view contact details and past transactions.",
    "This page helps you maintain a reliable vendor network and manage partnerships.",
  ],
  "/events": [
    "View and manage all upcoming events in this section.",
    "Click on an event to see detailed information and updates.",
    "You can create new events or modify existing ones here.",
    "Select an event to view participant details, schedule, and status.",
    "Use this page to track event progress and manage logistics.",
  ],
  "/analytics": [
    "View all upcoming events in the first data grid, with dates and details.",
    "Check your pending tasks in the second data grid to stay on track with deadlines.",
    "The third data grid shows follow-ups, so you never miss important tasks or communications.",
    "Each data grid can be filtered to show relevant events, tasks, and follow-ups for efficient tracking.",
    "Use the dashboard to get a quick overview of what's upcoming, what's pending, and what needs follow-up.",
  ],
  "/clients": [
    "You can view all clients in this section.",
    "Click on a client to view their detailed information.",
    "This page allows you to manage and view client details.",
    "Select a client to redirect to their profile and see more details.",
    "You can navigate back to the client list from any client's detail page.",
  ],
  "/internals": [
    "Manage internal operations and processes here.",
    "View employee-related information and tasks in this section.",
    "You can assign roles, track activities, and monitor performance internally.",
    "Select an internal task to view detailed status and updates.",
    "This section helps you organize and manage your internal workflow efficiently.",
  ],
};
