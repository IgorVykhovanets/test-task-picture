import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IPicture} from "../../interfaces/picture.interface";
import {pictureService} from "../../services/picture.service";

export const getAllPictureThunk = createAsyncThunk<any, any>(
    'picturesSlice/getAllPictureThunk',
    async ({page, limit}, {dispatch}) => {
        const {data} = await pictureService.getAllCurrentPage(page, limit);
        dispatch(getAllPicture(data));
    }
);

export const getDetailsPictureThunk = createAsyncThunk<any, any>(
    'picturesSlice/getDetailsPictureThunk',
    async ({id}, {dispatch}) => {
        const {data} = await pictureService.getDetails(id);
        dispatch(getDetailsPicture(data));
    }
);

interface IState {
    pictures: IPicture[];
    details_pic: null | IPicture;
    like_pictures: IPicture[];
}

const initialState: IState = {
    pictures: [],
    details_pic: null,
    like_pictures: [],
}

const pictureSlice = createSlice({
    name: 'pictureSlice',
    initialState,
    reducers: {
        getAllPicture: (state, action: PayloadAction<IPicture[]>) => {
            state.pictures = action.payload;
        },
        getDetailsPicture: (state, action: PayloadAction<IPicture>) => {
            state.details_pic = action.payload;
        },
        addLikePicture: (state, action: PayloadAction<IPicture>) => {
            state.like_pictures.push(action.payload);
        }
    }
});

export const picturesReducer = pictureSlice.reducer;

export const {getAllPicture, getDetailsPicture, addLikePicture} = pictureSlice.actions;