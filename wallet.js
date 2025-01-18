// wallet.js

class ClientWallet {
  constructor() {
    this.pubKey = '';
  }

  // Connecter le portefeuille Solana
  async connect() {
    if (window.solana && window.solana.isPhantom) {
      const resp = await window.solana.connect();
      this.pubKey = resp.publicKey.toString(); // Récupère la clé publique
      console.log("Connected with public key:", this.pubKey);
      return this.pubKey;
    } else {
      throw new Error("Phantom Wallet is not installed");
    }
  }

  // Retourner l'adresse publique du portefeuille
  address() {
    return this.pubKey;
  }

  // Déconnecter le portefeuille
  disconnect() {
    if (window.solana) {
      window.solana.disconnect();
      this.pubKey = ''; // Réinitialiser la clé publique
      console.log("Disconnected from Phantom Wallet");
    }
  }
}

// Exposer le module
var walletModule = { ClientWallet: ClientWallet };
