// src/carousel/carousel.model.ts

export interface CarouselItem {
    id: number;
    attributes: {
        titulo: string;
        subtitulo: string;
        link: string;
        banner: {
            data: {
                attributes: {
                    formats: {
                        large: {
                            url: string;
                        };
                        medium: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}
