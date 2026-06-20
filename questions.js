const assessments = {
  1: {
    title: "Level 1: Screening Round",
    pass: 60,
    questions: [
      {
        q: "A server exposes ports 22, 80 and 3306. Which service needs the highest priority review?",
        options: ["SSH only", "HTTP only", "MySQL/database exposure", "No risk"],
        answer: 2
      },
      {
        q: "An email says: 'Your Office365 account will be disabled. Click immediately.' What is the likely attack?",
        options: ["Phishing", "DDoS", "SQL Injection", "Packet Sniffing"],
        answer: 0
      },
      {
        q: "Login from Chennai at 10:00 AM and Moscow at 10:05 AM indicates:",
        options: ["Normal login", "Impossible travel", "Backup activity", "System update"],
        answer: 1
      },
      {
        q: "500 failed logins followed by 1 successful login indicates:",
        options: ["Brute force / credential stuffing", "Normal activity", "DNS tunneling", "Patch update"],
        answer: 0
      },
      {
        q: "Why are default credentials dangerous?",
        options: ["They are easy to remember", "They are publicly known and exploitable", "They improve security", "They encrypt data"],
        answer: 1
      },
      {
        q: "Why would an attacker prefer passive reconnaissance?",
        options: ["It is louder", "It leaves fewer traces", "It blocks firewalls", "It deletes logs"],
        answer: 1
      },
      {
        q: "Disabling MFA for admin accounts mainly increases the risk of:",
        options: ["Credential compromise", "Faster login", "Better encryption", "Patch failure"],
        answer: 0
      },
      {
        q: "CVSS 9.8 usually indicates:",
        options: ["Low severity", "Critical vulnerability", "Informational finding", "False positive"],
        answer: 1
      },
      {
        q: "The main purpose of EDR is:",
        options: ["Email design", "Endpoint detection and response", "Database backup", "Website hosting"],
        answer: 1
      },
      {
        q: "First action after identifying malware on a workstation:",
        options: ["Ignore it", "Isolate the system", "Delete all files immediately", "Post on social media"],
        answer: 1
      }
    ]
  },
  2: {
    title: "Level 2: Technical Investigation Round",
    pass: 65,
    questions: [
      {
        q: "Log: GET /index.php?id=1' OR '1'='1. Identify the attack.",
        options: ["SQL Injection", "DDoS", "ARP spoofing", "Normal request"],
        answer: 0
      },
      {
        q: "Repeated DNS requests to random long subdomains may indicate:",
        options: ["DNS tunneling", "Normal browsing", "Printer issue", "Patch installation"],
        answer: 0
      },
      {
        q: "Windows Event IDs 4625 repeated, then 4624 success, suggest:",
        options: ["Successful brute force", "No issue", "Disk failure", "DNS poisoning"],
        answer: 0
      },
      {
        q: "A host connects to a known malicious IP. First response:",
        options: ["Isolate host and investigate", "Restart router only", "Ignore", "Disable all users"],
        answer: 0
      },
      {
        q: "Which is a ransomware indicator?",
        options: ["Files encrypted with ransom note", "Printer queue", "Low brightness", "Keyboard layout"],
        answer: 0
      },
      {
        q: "After a malicious attachment is opened, useful evidence includes:",
        options: ["Email headers, hash, event logs", "Only wallpaper", "Only monitor size", "Only keyboard model"],
        answer: 0
      },
      {
        q: "Suspicious PowerShell execution is concerning because it can be used for:",
        options: ["Payload delivery and lateral movement", "Changing font only", "Screen brightness", "Printer cleaning"],
        answer: 0
      },
      {
        q: "MITRE ATT&CK tactic for credential dumping:",
        options: ["Credential Access", "Collection only", "Impact only", "Reconnaissance only"],
        answer: 0
      },
      {
        q: "To verify data exfiltration, review:",
        options: ["Firewall, proxy, DNS and upload logs", "Mouse settings", "Screen saver", "BIOS logo only"],
        answer: 0
      },
      {
        q: "Best SIEM logic for brute-force alert:",
        options: ["Many failed logins in short time from same source", "One normal login", "One website visit", "Printer offline"],
        answer: 0
      }
    ]
  },
  3: {
    title: "Level 3: Interview and Incident Response Simulation",
    pass: 70,
    questions: [
      {
        q: "At 3 AM, ransomware encrypts critical servers. First priority?",
        options: ["Contain/isolate affected systems", "Delete all servers", "Ignore until morning", "Pay immediately without investigation"],
        answer: 0
      },
      {
        q: "Choose three strongest baseline controls from MFA, EDR, SIEM, WAF, SOAR.",
        options: ["MFA, EDR, SIEM", "WAF only", "SOAR only", "No controls"],
        answer: 0
      },
      {
        q: "Employee copied customer data before resigning. Correct response:",
        options: ["Disable account, preserve logs, involve HR/legal", "Ignore", "Delete all logs", "Reward employee"],
        answer: 0
      },
      {
        q: "5,000 vulnerabilities are reported. Prioritize by:",
        options: ["Criticality, exploitability, exposure and business impact", "Alphabetical order", "Randomly", "Lowest risk first"],
        answer: 0
      },
      {
        q: "If EDR is bypassed, additional detection can come from:",
        options: ["SIEM, NIDS, UEBA and threat hunting", "Nothing else", "Only antivirus icon", "Wallpaper"],
        answer: 0
      },
      {
        q: "Manager asks to remove MFA due to complaints. Best answer:",
        options: ["Keep MFA; improve usability/adaptive MFA", "Remove all security", "Share passwords", "Disable logging"],
        answer: 0
      },
      {
        q: "Major cyber risk from Generative AI:",
        options: ["Phishing at scale and prompt injection", "Faster typing only", "Better monitor display", "Printer speed"],
        answer: 0
      },
      {
        q: "EDR flags a ChatGPT-generated PowerShell script. You should:",
        options: ["Analyze behavior in sandbox and check indicators", "Approve blindly", "Delete EDR", "Ignore"],
        answer: 0
      },
      {
        q: "Zero Trust for university should include:",
        options: ["MFA, IAM, device trust, segmentation, monitoring", "Open access to all", "No passwords", "Disable logs"],
        answer: 0
      },
      {
        q: "A cybersecurity professional is different from a tool operator because they:",
        options: ["Think critically and align security with risk", "Only click buttons", "Never report", "Ignore business impact"],
        answer: 0
      }
    ]
  }
};