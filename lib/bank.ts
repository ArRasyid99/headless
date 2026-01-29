export interface Bank {
  id: string;
  name: string;
  rekening: string;
  atasNama: string;
}

export const bankList: Bank[] = [
  {
    id: "bsi",
    name: "Bank Syariah Indonesia (BSI)",
    rekening: "3000-5000-45",
    atasNama: "Yayasan Ashil Cahaya Tauhid",
  },
  {
    id: "mandiri",
    name: "Bank Mandiri",
    rekening: "10-8000-3434-124",
    atasNama: "Yayasan Ashil Cahaya Tauhid",
  },
  {
    id: "bri",
    name: "Bank BRI",
    rekening: "06-9601-0326-35509",
    atasNama: "Yayasan Ashil Cahaya Tauhid",
  },
];
