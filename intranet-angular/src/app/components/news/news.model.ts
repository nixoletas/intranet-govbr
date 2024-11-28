export interface NewsItem {
    id: number;
    attributes: {
        titulo: string;
        subtitulo: string;
        content: string;
        article: string;
        createdAt: string;
        cover: {
            data: {
                attributes: {
                    formats: {
                        small: {
                            url: string;
                        };
                    };
                };
            };
        };
        fotos: {
            data: {
                attributes: {
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}
