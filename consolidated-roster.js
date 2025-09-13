// Consolidated Roster Data and Functionality

// Extended roster data with PTO information
const consolidatedRosterData = [
  // JAPAC Region (10 members) - December 2024
  {
    id: 1,
    name: "Yuki Tanaka",
    role: "Senior Lead",
    region: "JAPAC",
    email: "yuki.tanaka@oracle.com",
    phone: "+81-3-1234-5678",
    timezone: "JST (UTC+9)",
    location: "Tokyo, Japan",
    expertise: ["Cloud Infrastructure", "Database Performance", "Incident Management"],
    experience: "8 years",
    avatar: "YT",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Infrastructure"
  },
  {
    id: 2,
    name: "Hiroshi Sato",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "hiroshi.sato@oracle.com",
    phone: "+81-3-1234-5679",
    timezone: "JST (UTC+9)",
    location: "Tokyo, Japan",
    expertise: ["Oracle Cloud", "Security", "Performance Tuning"],
    experience: "6 years",
    avatar: "HS",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Oracle Cloud"
  },
  {
    id: 3,
    name: "Mei Chen",
    role: "Senior Lead",
    region: "JAPAC",
    email: "mei.chen@oracle.com",
    phone: "+86-10-1234-5678",
    timezone: "CST (UTC+8)",
    location: "Beijing, China",
    expertise: ["Enterprise Applications", "Integration", "Cloud Migration"],
    experience: "9 years",
    avatar: "MC",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Enterprise Applications"
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "rajesh.kumar@oracle.com",
    phone: "+91-11-1234-5678",
    timezone: "IST (UTC+5:30)",
    location: "Bangalore, India",
    expertise: ["Database Administration", "Backup & Recovery", "High Availability"],
    experience: "7 years",
    avatar: "RK",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Database Administration"
  },
  {
    id: 5,
    name: "Sakura Yamamoto",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "sakura.yamamoto@oracle.com",
    phone: "+81-3-1234-5680",
    timezone: "JST (UTC+9)",
    location: "Osaka, Japan",
    expertise: ["Middleware", "WebLogic", "Application Performance"],
    experience: "5 years",
    avatar: "SY",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Middleware"
  },
  {
    id: 6,
    name: "David Park",
    role: "Senior Lead",
    region: "JAPAC",
    email: "david.park@oracle.com",
    phone: "+82-2-1234-5678",
    timezone: "KST (UTC+9)",
    location: "Seoul, South Korea",
    expertise: ["Cloud Architecture", "DevOps", "Automation"],
    experience: "10 years",
    avatar: "DP",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Architecture"
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "priya.sharma@oracle.com",
    phone: "+91-11-1234-5679",
    timezone: "IST (UTC+5:30)",
    location: "Hyderabad, India",
    expertise: ["Data Integration", "ETL", "Business Intelligence"],
    experience: "6 years",
    avatar: "PS",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Data Integration"
  },
  {
    id: 8,
    name: "Kenji Nakamura",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "kenji.nakamura@oracle.com",
    phone: "+81-3-1234-5681",
    timezone: "JST (UTC+9)",
    location: "Tokyo, Japan",
    expertise: ["Network Security", "Identity Management", "Compliance"],
    experience: "4 years",
    avatar: "KN",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Network Security"
  },
  {
    id: 9,
    name: "Li Wei",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "li.wei@oracle.com",
    phone: "+86-21-1234-5678",
    timezone: "CST (UTC+8)",
    location: "Shanghai, China",
    expertise: ["Cloud Storage", "Data Management", "Disaster Recovery"],
    experience: "5 years",
    avatar: "LW",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Storage"
  },
  {
    id: 10,
    name: "Akira Suzuki",
    role: "Escalation Specialist",
    region: "JAPAC",
    email: "akira.suzuki@oracle.com",
    phone: "+81-3-1234-5682",
    timezone: "JST (UTC+9)",
    location: "Tokyo, Japan",
    expertise: ["Mobile Development", "API Management", "Microservices"],
    experience: "3 years",
    avatar: "AS",
    status: "pto",
    ptoDates: "Dec 23-27, 2024",
    primaryExpertise: "Mobile Development"
  },

  // EMEA Region (10 members) - December 2024
  {
    id: 11,
    name: "Emma Thompson",
    role: "Senior Lead",
    region: "EMEA",
    email: "emma.thompson@oracle.com",
    phone: "+44-20-1234-5678",
    timezone: "GMT (UTC+0)",
    location: "London, UK",
    expertise: ["Cloud Infrastructure", "Database Performance", "Incident Management"],
    experience: "12 years",
    avatar: "ET",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Infrastructure"
  },
  {
    id: 12,
    name: "Marcus Weber",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "marcus.weber@oracle.com",
    phone: "+49-30-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Berlin, Germany",
    expertise: ["Oracle Cloud", "Security", "Performance Tuning"],
    experience: "8 years",
    avatar: "MW",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Oracle Cloud"
  },
  {
    id: 13,
    name: "Sophie Dubois",
    role: "Senior Lead",
    region: "EMEA",
    email: "sophie.dubois@oracle.com",
    phone: "+33-1-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Paris, France",
    expertise: ["Enterprise Applications", "Integration", "Cloud Migration"],
    experience: "11 years",
    avatar: "SD",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Enterprise Applications"
  },
  {
    id: 14,
    name: "Ahmed Hassan",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "ahmed.hassan@oracle.com",
    phone: "+971-4-1234-5678",
    timezone: "GST (UTC+4)",
    location: "Dubai, UAE",
    expertise: ["Database Administration", "Backup & Recovery", "High Availability"],
    experience: "7 years",
    avatar: "AH",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Database Administration"
  },
  {
    id: 15,
    name: "Isabella Rossi",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "isabella.rossi@oracle.com",
    phone: "+39-02-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Milan, Italy",
    expertise: ["Middleware", "WebLogic", "Application Performance"],
    experience: "6 years",
    avatar: "IR",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Middleware"
  },
  {
    id: 16,
    name: "James O'Connor",
    role: "Senior Lead",
    region: "EMEA",
    email: "james.oconnor@oracle.com",
    phone: "+353-1-1234-5678",
    timezone: "GMT (UTC+0)",
    location: "Dublin, Ireland",
    expertise: ["Cloud Architecture", "DevOps", "Automation"],
    experience: "9 years",
    avatar: "JO",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Architecture"
  },
  {
    id: 17,
    name: "Anna Kowalski",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "anna.kowalski@oracle.com",
    phone: "+48-22-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Warsaw, Poland",
    expertise: ["Data Integration", "ETL", "Business Intelligence"],
    experience: "5 years",
    avatar: "AK",
    status: "training",
    ptoDates: "Dec 20-22, 2024",
    primaryExpertise: "Data Integration"
  },
  {
    id: 18,
    name: "Carlos Rodriguez",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "carlos.rodriguez@oracle.com",
    phone: "+34-91-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Madrid, Spain",
    expertise: ["Network Security", "Identity Management", "Compliance"],
    experience: "4 years",
    avatar: "CR",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Network Security"
  },
  {
    id: 19,
    name: "Nina Andersen",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "nina.andersen@oracle.com",
    phone: "+45-33-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Copenhagen, Denmark",
    expertise: ["Cloud Storage", "Data Management", "Disaster Recovery"],
    experience: "6 years",
    avatar: "NA",
    status: "sick",
    ptoDates: "Dec 18-19, 2024",
    primaryExpertise: "Cloud Storage"
  },
  {
    id: 20,
    name: "Thomas Mueller",
    role: "Escalation Specialist",
    region: "EMEA",
    email: "thomas.mueller@oracle.com",
    phone: "+49-89-1234-5678",
    timezone: "CET (UTC+1)",
    location: "Munich, Germany",
    expertise: ["Mobile Development", "API Management", "Microservices"],
    experience: "3 years",
    avatar: "TM",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Mobile Development"
  },

  // North America Region (10 members) - December 2024
  {
    id: 21,
    name: "Michael Johnson",
    role: "Senior Lead",
    region: "North America",
    email: "michael.johnson@oracle.com",
    phone: "+1-650-123-4567",
    timezone: "PST (UTC-8)",
    location: "Redwood Shores, CA",
    expertise: ["Cloud Infrastructure", "Database Performance", "Incident Management"],
    experience: "15 years",
    avatar: "MJ",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Infrastructure"
  },
  {
    id: 22,
    name: "Sarah Williams",
    role: "Escalation Specialist",
    region: "North America",
    email: "sarah.williams@oracle.com",
    phone: "+1-650-123-4568",
    timezone: "PST (UTC-8)",
    location: "Austin, TX",
    expertise: ["Oracle Cloud", "Security", "Performance Tuning"],
    experience: "8 years",
    avatar: "SW",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Oracle Cloud"
  },
  {
    id: 23,
    name: "Robert Brown",
    role: "Senior Lead",
    region: "North America",
    email: "robert.brown@oracle.com",
    phone: "+1-650-123-4569",
    timezone: "PST (UTC-8)",
    location: "Seattle, WA",
    expertise: ["Enterprise Applications", "Integration", "Cloud Migration"],
    experience: "12 years",
    avatar: "RB",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Enterprise Applications"
  },
  {
    id: 24,
    name: "Jennifer Davis",
    role: "Escalation Specialist",
    region: "North America",
    email: "jennifer.davis@oracle.com",
    phone: "+1-650-123-4570",
    timezone: "PST (UTC-8)",
    location: "Denver, CO",
    expertise: ["Database Administration", "Backup & Recovery", "High Availability"],
    experience: "7 years",
    avatar: "JD",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Database Administration"
  },
  {
    id: 25,
    name: "Christopher Miller",
    role: "Escalation Specialist",
    region: "North America",
    email: "christopher.miller@oracle.com",
    phone: "+1-650-123-4571",
    timezone: "PST (UTC-8)",
    location: "Phoenix, AZ",
    expertise: ["Middleware", "WebLogic", "Application Performance"],
    experience: "6 years",
    avatar: "CM",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Middleware"
  },
  {
    id: 26,
    name: "Amanda Wilson",
    role: "Senior Lead",
    region: "North America",
    email: "amanda.wilson@oracle.com",
    phone: "+1-650-123-4572",
    timezone: "PST (UTC-8)",
    location: "Portland, OR",
    expertise: ["Cloud Architecture", "DevOps", "Automation"],
    experience: "10 years",
    avatar: "AW",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Architecture"
  },
  {
    id: 27,
    name: "Daniel Moore",
    role: "Escalation Specialist",
    region: "North America",
    email: "daniel.moore@oracle.com",
    phone: "+1-650-123-4573",
    timezone: "PST (UTC-8)",
    location: "San Francisco, CA",
    expertise: ["Data Integration", "ETL", "Business Intelligence"],
    experience: "5 years",
    avatar: "DM",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Data Integration"
  },
  {
    id: 28,
    name: "Lisa Taylor",
    role: "Escalation Specialist",
    region: "North America",
    email: "lisa.taylor@oracle.com",
    phone: "+1-650-123-4574",
    timezone: "PST (UTC-8)",
    location: "Los Angeles, CA",
    expertise: ["Network Security", "Identity Management", "Compliance"],
    experience: "4 years",
    avatar: "LT",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Network Security"
  },
  {
    id: 29,
    name: "Kevin Anderson",
    role: "Escalation Specialist",
    region: "North America",
    email: "kevin.anderson@oracle.com",
    phone: "+1-650-123-4575",
    timezone: "PST (UTC-8)",
    location: "San Diego, CA",
    expertise: ["Cloud Storage", "Data Management", "Disaster Recovery"],
    experience: "6 years",
    avatar: "KA",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Cloud Storage"
  },
  {
    id: 30,
    name: "Michelle Thomas",
    role: "Escalation Specialist",
    region: "North America",
    email: "michelle.thomas@oracle.com",
    phone: "+1-650-123-4576",
    timezone: "PST (UTC-8)",
    location: "Las Vegas, NV",
    expertise: ["Mobile Development", "API Management", "Microservices"],
    experience: "3 years",
    avatar: "MT",
    status: "available",
    ptoDates: "",
    primaryExpertise: "Mobile Development"
  }
];

// PTO data for different months
const ptoData = {
  "2024-12": [
    { id: 10, name: "Akira Suzuki", region: "JAPAC", status: "pto", dates: "Dec 23-27, 2024", reason: "Holiday Break" },
    { id: 17, name: "Anna Kowalski", region: "EMEA", status: "training", dates: "Dec 20-22, 2024", reason: "Advanced Training" },
    { id: 19, name: "Nina Andersen", region: "EMEA", status: "sick", dates: "Dec 18-19, 2024", reason: "Medical Leave" }
  ],
  "2025-01": [
    { id: 3, name: "Mei Chen", region: "JAPAC", status: "pto", dates: "Jan 15-20, 2025", reason: "Chinese New Year" },
    { id: 12, name: "Marcus Weber", region: "EMEA", status: "training", dates: "Jan 10-12, 2025", reason: "Security Certification" },
    { id: 25, name: "Christopher Miller", region: "North America", status: "pto", dates: "Jan 8-10, 2025", reason: "Personal Time" }
  ],
  "2025-02": [
    { id: 6, name: "David Park", region: "JAPAC", status: "pto", dates: "Feb 12-16, 2025", reason: "Family Vacation" },
    { id: 14, name: "Ahmed Hassan", region: "EMEA", status: "training", dates: "Feb 5-7, 2025", reason: "Database Training" },
    { id: 22, name: "Sarah Williams", region: "North America", status: "sick", dates: "Feb 3-4, 2025", reason: "Medical Leave" }
  ],
  "2025-03": [
    { id: 1, name: "Yuki Tanaka", region: "JAPAC", status: "pto", dates: "Mar 20-25, 2025", reason: "Spring Break" },
    { id: 16, name: "James O'Connor", region: "EMEA", status: "training", dates: "Mar 15-17, 2025", reason: "Cloud Architecture" },
    { id: 28, name: "Lisa Taylor", region: "North America", status: "pto", dates: "Mar 10-12, 2025", reason: "Personal Time" }
  ]
};

// Initialize the consolidated roster when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Consolidated Roster loaded');
  initializeConsolidatedRoster();
  setupEventListeners();
  updatePTOData('2024-12');
});

function initializeConsolidatedRoster() {
  renderRosterTable();
  updateAvailabilitySummary();
}

function setupEventListeners() {
  // Month selector
  const monthSelector = document.getElementById('month-selector');
  if (monthSelector) {
    monthSelector.addEventListener('change', (e) => {
      const selectedMonth = e.target.value;
      updatePTOData(selectedMonth);
      updateMonthDisplay(selectedMonth);
    });
  }

  // Region filter
  const regionFilter = document.getElementById('region-filter');
  if (regionFilter) {
    regionFilter.addEventListener('change', filterTable);
  }

  // Status filter
  const statusFilter = document.getElementById('status-filter');
  if (statusFilter) {
    statusFilter.addEventListener('change', filterTable);
  }

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', filterTable);
  }
}

function updatePTOData(month) {
  const ptoItems = ptoData[month] || [];
  const ptoGrid = document.getElementById('pto-grid');
  
  if (!ptoGrid) return;

  ptoGrid.innerHTML = '';

  if (ptoItems.length === 0) {
    ptoGrid.innerHTML = '<p style="text-align: center; color: var(--muted); grid-column: 1 / -1;">No PTO or leave scheduled for this month.</p>';
    return;
  }

  ptoItems.forEach(pto => {
    const ptoItem = createPTOItem(pto);
    ptoGrid.appendChild(ptoItem);
  });

  // Update roster data with PTO information
  updateRosterWithPTO(month);
}

function createPTOItem(pto) {
  const item = document.createElement('div');
  item.className = 'pto-item';
  
  const member = consolidatedRosterData.find(m => m.id === pto.id);
  if (!member) return item;

  item.innerHTML = `
    <div class="pto-header">
      <div class="pto-avatar">${member.avatar}</div>
      <div class="pto-info">
        <h3>${member.name}</h3>
        <p class="pto-role">${member.role} - ${member.region}</p>
      </div>
    </div>
    
    <div class="pto-details">
      <div class="pto-detail">
        <strong>Status:</strong>
        <span class="pto-status ${pto.status}">${pto.status.toUpperCase()}</span>
      </div>
      <div class="pto-detail">
        <strong>Dates:</strong>
        <span>${pto.dates}</span>
      </div>
      <div class="pto-detail">
        <strong>Reason:</strong>
        <span>${pto.reason}</span>
      </div>
      <div class="pto-detail">
        <strong>Location:</strong>
        <span>${member.location}</span>
      </div>
    </div>
  `;

  return item;
}

function updateRosterWithPTO(month) {
  const ptoItems = ptoData[month] || [];
  
  // Reset all members to available
  consolidatedRosterData.forEach(member => {
    member.status = 'available';
    member.ptoDates = '';
  });

  // Update members with PTO
  ptoItems.forEach(pto => {
    const member = consolidatedRosterData.find(m => m.id === pto.id);
    if (member) {
      member.status = pto.status;
      member.ptoDates = pto.dates;
    }
  });

  renderRosterTable();
  updateAvailabilitySummary();
}

function updateMonthDisplay(month) {
  const monthNames = {
    '2024-12': 'December 2024',
    '2025-01': 'January 2025',
    '2025-02': 'February 2025',
    '2025-03': 'March 2025'
  };

  const currentMonthElement = document.getElementById('current-month');
  const tableMonthElement = document.getElementById('table-month');
  
  if (currentMonthElement) {
    currentMonthElement.textContent = monthNames[month];
  }
  if (tableMonthElement) {
    tableMonthElement.textContent = monthNames[month];
  }
}

function renderRosterTable() {
  const tableBody = document.getElementById('roster-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  consolidatedRosterData.forEach(member => {
    const row = createTableRow(member);
    tableBody.appendChild(row);
  });
}

function createTableRow(member) {
  const row = document.createElement('tr');
  row.setAttribute('data-region', member.region);
  row.setAttribute('data-status', member.status);
  row.setAttribute('data-name', member.name.toLowerCase());
  row.setAttribute('data-role', member.role.toLowerCase());
  row.setAttribute('data-location', member.location.toLowerCase());

  const regionClass = member.region.toLowerCase().replace(' ', '-');
  
  row.innerHTML = `
    <td class="member-name">${member.name}</td>
    <td><span class="region-badge ${regionClass}">${member.region}</span></td>
    <td>${member.role}</td>
    <td>${member.location}</td>
    <td>${member.timezone}</td>
    <td><span class="status-badge ${member.status}">${member.status.toUpperCase()}</span></td>
    <td>${member.ptoDates || '-'}</td>
    <td>${member.experience}</td>
    <td>${member.primaryExpertise}</td>
    <td>
      <div class="contact-links">
        <a href="mailto:${member.email}" class="contact-link">Email</a>
        <a href="tel:${member.phone}" class="contact-link">Call</a>
      </div>
    </td>
  `;

  return row;
}

function filterTable() {
  const regionFilter = document.getElementById('region-filter')?.value || 'all';
  const statusFilter = document.getElementById('status-filter')?.value || 'all';
  const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
  
  const rows = document.querySelectorAll('#roster-table-body tr');
  let visibleCount = 0;

  rows.forEach(row => {
    const region = row.getAttribute('data-region');
    const status = row.getAttribute('data-status');
    const name = row.getAttribute('data-name');
    const role = row.getAttribute('data-role');
    const location = row.getAttribute('data-location');

    const regionMatch = regionFilter === 'all' || region === regionFilter;
    const statusMatch = statusFilter === 'all' || status === statusFilter;
    const searchMatch = !searchTerm || 
      name.includes(searchTerm) || 
      role.includes(searchTerm) || 
      location.includes(searchTerm);

    if (regionMatch && statusMatch && searchMatch) {
      row.classList.remove('hidden');
      visibleCount++;
    } else {
      row.classList.add('hidden');
    }
  });

  // Update available count
  const availableCountElement = document.getElementById('available-count');
  if (availableCountElement) {
    availableCountElement.textContent = visibleCount;
  }
}

function updateAvailabilitySummary() {
  const regions = ['JAPAC', 'EMEA', 'North America'];
  
  regions.forEach(region => {
    const regionData = consolidatedRosterData.filter(member => member.region === region);
    const available = regionData.filter(member => member.status === 'available').length;
    const onPTO = regionData.filter(member => member.status !== 'available').length;
    const total = regionData.length;
    const percentage = Math.round((available / total) * 100);

    const regionKey = region.toLowerCase().replace(' ', '-');
    
    // Update numbers
    const availableElement = document.getElementById(`${regionKey}-available`);
    const ptoElement = document.getElementById(`${regionKey}-pto`);
    const totalElement = document.getElementById(`${regionKey}-total`);
    const percentageElement = document.getElementById(`${regionKey}-percentage`);

    if (availableElement) availableElement.textContent = available;
    if (ptoElement) ptoElement.textContent = onPTO;
    if (totalElement) totalElement.textContent = total;
    if (percentageElement) {
      percentageElement.style.width = `${percentage}%`;
      percentageElement.parentElement.nextElementSibling.textContent = `${percentage}% Available`;
    }
  });
}

// Export for potential use in other scripts
window.consolidatedRosterData = consolidatedRosterData;
window.ptoData = ptoData;
