// Tipe untuk konten blok yang diharapkan oleh PortableText
interface ContentBlock {
     _key: string; // Tambahkan _key yang dibutuhkan oleh PortableText
     _type: string; // Tambahkan _type yang diperlukan oleh PortableText
     children?: { text: string }[]; // Opsional, jika ada teks
     markDefs?: any[]; // Jika Anda ingin mendukung tanda-tanda khusus
     style?: string; // Misalnya 'normal', 'h1', dll.
}

// Tipe untuk dimensi (contoh sederhana)
interface Dimensions {
     width: number;
     height: number;
}

export interface Programming {
     title: string;
     overview: string;
     content: ContentBlock[]; // Ganti any dengan array blok konten
     _id: string;
     slug: {
          current: string;
     };
     _createdAt: string;
     mainImage: string;
     url: string;
}

export interface Technology {
     dimensions: Dimensions; // Ganti any dengan objek Dimensions
     title: string;
     overview: string;
     content: ContentBlock[]; // Ganti any dengan array blok konten
     _id: string;
     slug: {
          current: string;
     };
     _createdAt: string;
     mainImage: string;
     url: string;
}
