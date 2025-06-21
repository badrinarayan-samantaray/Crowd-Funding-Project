
# Crowdfunding Smart Contract Project

This repository contains the modified smart contract files and code implementations for the assigned tasks under the Nullclass Internship Program.

##  Project Overview

A blockchain-based crowdfunding platform built using Solidity and Hardhat. It allows users to create projects, fund them, withdraw funds, and manage deadlines transparently using smart contracts.

---

##  Assigned Tasks and Implementations

###  1. Add Events to Withdraw Functions
- Added `UserWithdrawal` and `AdminWithdrawal` events.
- Emitted these events in `userWithdrawFunds` and `adminWithdrawFunds` functions respectively.

###  2. Extend Project Deadline
- Created a new function `extendDeadline(uint _projectId, uint _newDeadline)` which allows the **project creator** to update the deadline of their project.
- Includes checks to ensure only the creator can modify, and only if the new deadline is in the future.

###  3. Highest Funder Tracking
- Added a new variable `address highestFunder;` inside the `Project` struct.
- Inside the funding function, added logic to update the highest funder:
  ```
  if (contributions[_projectId][msg.sender] > contributions[_projectId][projects[_projectId].highestFunder]) {
      projects[_projectId].highestFunder = msg.sender;
  }
  ```

---

##  Project Structure

- `contracts/` – Solidity smart contracts
- `scripts/` – Deployment and interaction scripts
- `test/` – Optional test scripts
- `hardhat.config.js` – Hardhat configuration

---

##  How to Run

### 1. Install Dependencies
```
npm install
```

### 2. Compile Contracts
```
npx hardhat compile
```

### 3. Run Local Blockchain
```
npx hardhat node
```

### 4. For Running Script
```
npx hardhat run scripts/deploy-crowdToken.js --network sepolia

npx hardhat run scripts/createProject.js --network sepolia



---

##  Notes

- All code is original and written from scratch to avoid plagiarism.
- GitHub submission link contains the complete working project.
- Tasks were implemented in compliance with Nullclass's internship requirements.

---



Important Links:
sepolia faucet - https://www.alchemy.com/faucets/ethereum-sepolia

etherscan - https://etherscan.io/myapikey

solidity documentation - https://docs.soliditylang.org/en/v0.8.25/



