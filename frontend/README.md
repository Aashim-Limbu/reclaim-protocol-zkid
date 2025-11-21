Available: {Gender, AccountStatus, UserEmail, Birthdate, BirthPlace, CitizenID}
You selected: {AccountStatus}
```

**What Reclaim Will Prove:**
1. ✅ The user successfully logged into the Nagarik App
2. ✅ The `AccountStatus` field exists in the response
3. ✅ The value of `AccountStatus` hasn't been tampered with
4. ✅ This data came from the actual Nagarik App servers

**What Will NOT Be in the Proof:**
- ❌ The user's email, birthdate, birthplace, or CitizenID
- ❌ Gender information

**Why This Matters:**
- If you only verify `AccountStatus`, you're only proving "this person has an active Nagarik account"
- You're NOT proving they're Nepali (unless AccountStatus specifically indicates nationality)
- You're NOT proving their identity or unique citizenship

### What's Actually Being Checked - Deep Dive

Let me break down the verification process at each layer:

## Layer 1: Network Level (TLS Verification)
```
User's Device → Attestor (Reclaim) → Nagarik App Server
     |_____________encrypted TLS tunnel____________|
```

**What's Checked:**
- The HTTPS connection is genuine
- The server certificate matches nagarikapp.com (or whatever domain)
- Data is encrypted end-to-end
- No man-in-the-middle attacks

**Reclaim's Role:** The attestor witnesses the encrypted traffic but **cannot decrypt it**. It only proves "a legitimate HTTPS session happened with the real Nagarik App server."

## Layer 2: Authentication (Login Verification)
```
POST /api/login
{
  "username": "user@example.com",
  "password": "●●●●●●●●"  // Hidden from attestor
}

Response 200 OK
{
  "success": true,
  "sessionToken": "abc123..."  // Hidden from attestor
}
```

**What's Checked:**
- The user provided valid credentials
- The Nagarik App server accepted them
- A session was established

**What's NOT Checked:**
- ❌ Whether the person entering credentials is the rightful owner
- ❌ Biometric verification
- ❌ Device ownership

**This is your vulnerability point** - anyone with the username/password can pass this check.

## Layer 3: Data Extraction (Your Selected Fields)
```
GET /api/user/profile
Authorization: Bearer abc123...  // Hidden from attestor

Response 200 OK
{
  "Gender": "Male",
  "AccountStatus": "Active",        // ← YOU SELECTED THIS
  "UserEmail": "user@example.com",
  "Birthdate": "1990-01-15",
  "BirthPlace": "Kathmandu",
  "CitizenID": "12345-67890-123"
}
