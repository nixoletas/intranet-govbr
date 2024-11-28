// src/carousel/carousel.model.ts

export interface PopupItem {
    id: number;
    attributes: {
        link: string;
        popup: {
            data: {
                attributes: {
                    formats: {
                        large: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}
