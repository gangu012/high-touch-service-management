// High Touch Roster Data and Functionality

// Dummy roster data for 30 members across 3 regions
const rosterData = [
  // JAPAC Region (10 members)
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
    avatar: "YT"
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
    avatar: "HS"
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
    avatar: "MC"
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
    avatar: "RK"
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
    avatar: "SY"
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
    avatar: "DP"
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
    avatar: "PS"
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
    avatar: "KN"
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
    avatar: "LW"
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
    avatar: "AS"
  },

  // EMEA Region (10 members)
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
    avatar: "ET"
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
    avatar: "MW"
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
    avatar: "SD"
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
    avatar: "AH"
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
    avatar: "IR"
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
    avatar: "JO"
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
    avatar: "AK"
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
    avatar: "CR"
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
    avatar: "NA"
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
    avatar: "TM"
  },

  // North America Region (10 members)
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
    avatar: "MJ"
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
    avatar: "SW"
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
    avatar: "RB"
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
    avatar: "JD"
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
    avatar: "CM"
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
    avatar: "AW"
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
    avatar: "DM"
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
    avatar: "LT"
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
    avatar: "KA"
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
    avatar: "MT"
  }
];

// Initialize the roster when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('High Touch Roster loaded');
  initializeRoster();
  setupEventListeners();
});

function initializeRoster() {
  const container = document.getElementById('roster-container');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Render all roster items
  rosterData.forEach(member => {
    const rosterItem = createRosterItem(member);
    container.appendChild(rosterItem);
  });
}

function createRosterItem(member) {
  const item = document.createElement('div');
  item.className = 'roster-item';
  item.setAttribute('data-region', member.region);
  item.setAttribute('data-name', member.name.toLowerCase());
  item.setAttribute('data-role', member.role.toLowerCase());
  item.setAttribute('data-expertise', member.expertise.join(' ').toLowerCase());

  const regionClass = member.region.toLowerCase().replace(' ', '-');
  
  item.innerHTML = `
    <div class="member-header">
      <div class="member-avatar">${member.avatar}</div>
      <div class="member-info">
        <h3>${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <span class="region-badge ${regionClass}">${member.region}</span>
      </div>
    </div>
    
    <div class="member-details">
      <div class="member-detail">
        <strong>Location:</strong> ${member.location}
      </div>
      <div class="member-detail">
        <strong>Timezone:</strong> ${member.timezone}
      </div>
      <div class="member-detail">
        <strong>Experience:</strong> ${member.experience}
      </div>
    </div>
    
    <div class="member-expertise">
      <strong>Expertise:</strong>
      <div class="expertise-tags">
        ${member.expertise.map(skill => `<span class="expertise-tag">${skill}</span>`).join('')}
      </div>
    </div>
    
    <div class="member-contact">
      <a href="mailto:${member.email}" class="contact-btn">Email</a>
      <a href="tel:${member.phone}" class="contact-btn">Call</a>
    </div>
  `;

  return item;
}

function setupEventListeners() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Filter roster items
      const region = btn.getAttribute('data-region');
      filterRoster(region);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      searchRoster(searchTerm);
    });
  }
}

function filterRoster(region) {
  const items = document.querySelectorAll('.roster-item');
  
  items.forEach(item => {
    if (region === 'all' || item.getAttribute('data-region') === region) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
  
  // Update summary cards
  updateSummaryCards(region);
}

function searchRoster(searchTerm) {
  const items = document.querySelectorAll('.roster-item');
  
  items.forEach(item => {
    const name = item.getAttribute('data-name');
    const role = item.getAttribute('data-role');
    const expertise = item.getAttribute('data-expertise');
    
    if (name.includes(searchTerm) || role.includes(searchTerm) || expertise.includes(searchTerm)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function updateSummaryCards(region) {
  const summaryCards = document.querySelectorAll('.summary-card');
  
  summaryCards.forEach(card => {
    const cardRegion = card.getAttribute('data-region');
    
    if (region === 'all' || cardRegion === region) {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    } else {
      card.style.opacity = '0.5';
      card.style.transform = 'scale(0.95)';
    }
  });
}

// Export for potential use in other scripts
window.rosterData = rosterData;
