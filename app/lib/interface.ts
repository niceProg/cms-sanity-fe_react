// Tipe untuk konten blok (jika konten terdiri dari blok teks atau objek lain)
type ContentBlock = {
     type: string;
     children: { text: string }[];
};

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
