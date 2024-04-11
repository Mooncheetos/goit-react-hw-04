import axious from "axios";

const accesKey = "BZQAzksl-XaOXhaHGrM0_3aHS3d4w7Mb-lKF6gG7NmM";
const response

export const requestImages = async () => {
    const { data } = await axious.get("")

    return: {
        results: data.results,
            total_pages: data.total_pages,
    };
};