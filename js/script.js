"use strict";
// UI
const root = document.querySelector(".root");
const ui = {
    wrapper: document.createElement("div"),
    title: document.createElement("h2"),
    container: document.createElement("div"),
    editor: document.createElement("div"),
    compare: document.createElement("div"),
    imgCompare: document.createElement("img"),
    rotate: document.createElement("div"),
    titleRotate: document.createElement("label"),
    options: document.createElement("div"),
    btnLeft: document.createElement("button"),
    btnRight: document.createElement("button"),
    btnHorizon: document.createElement("button"),
    btnVert: document.createElement("button"),
    iLeft: document.createElement("i"),
    iRight: document.createElement("i"),
    iVert: document.createElement("i"),
    iHorizon: document.createElement("i"),
    sizes: document.createElement("div"),
    rowSizes: document.createElement("div"),
    columnWidth: document.createElement("div"),
    widthLabel: document.createElement("label"),
    widthInput: document.createElement("input"),
    columnHeight: document.createElement("div"),
    heightLabel: document.createElement("label"),
    heightInput: document.createElement("input"),
    filter: document.createElement("div"),
    filterTitle: document.createElement("label"),
    filterOptions: document.createElement("div"),
    btnBright: document.createElement("button"),
    btnSatur: document.createElement("button"),
    btnInvers: document.createElement("button"),
    btnGray: document.createElement("button"),
    btnBlur: document.createElement("button"),
    btnContr: document.createElement("button"),
    filterExtent: document.createElement("div"),
    filterInfo: document.createElement("div"),
    filterName: document.createElement("p"),
    filterValue: document.createElement("p"),
    filterVal: document.createElement("input"),
    previewImgDiv: document.createElement("div"),
    previewImg: document.createElement("img"),
    controls: document.createElement("div"),
    resetFilterBtn: document.createElement("button"),
    controlsRow: document.createElement("div"),
    fileInput: document.createElement("input"),
    chooseImgBtn: document.createElement("button"),
    saveImgBtn: document.createElement("button"),
    modal: document.createElement("div"),
    modalTextWrap: document.createElement("div"),
    modalText: document.createElement("p"),
    closeImgWrapper: document.createElement("div"),
    closeImgBtn: document.createElement("img"),
    closeModal: document.createElement("div"),
    closeModalText: document.createElement("span"),
    closeModalBtn: document.createElement("div"),
    closeModalYes: document.createElement("button"),
    closeModalNo: document.createElement("button"),

    elementOptions() {
        this.title.textContent = "Editor For Your Images";
        this.titleRotate.textContent = "Rotate & Flip";
        this.widthLabel.textContent = "Width";
        this.heightLabel.textContent = "Height";
        this.filterTitle.textContent = "Filters";
        this.btnBright.textContent = "Brightness";
        this.btnSatur.textContent = "Saturation";
        this.btnInvers.textContent = "Inversion";
        this.btnGray.textContent = "GrayScale";
        this.btnBlur.textContent = "Blur";
        this.btnContr.textContent = "Contrast";
        this.filterName.textContent = "Brightness";
        this.filterValue.textContent = "100%";
        this.resetFilterBtn.textContent = "Reset Filters";
        this.chooseImgBtn.textContent = "CHOOSE IMAGE";
        this.saveImgBtn.textContent = "SAVE";
        this.modalText.textContent = "Image Successfully Saved";
        this.closeModalText.textContent = "Are You Sure You Want To Delete ?";
        this.closeModalYes.textContent = "Yes";
        this.closeModalNo.textContent = "No";

        this.filterVal.type = "range";
        this.widthInput.type = "number";
        this.fileInput.type = "file";
        this.heightInput.type = "number";

        this.btnLeft.id = "left";
        this.btnRight.id = "right";
        this.btnHorizon.id = "horizontal";
        this.btnVert.id = "vertical";
        this.btnBright.id = "brightness";
        this.btnSatur.id = "saturation";
        this.btnInvers.id = "inversion";
        this.btnGray.id = "grayscale";
        this.btnBlur.id = "blur";
        this.btnContr.id = "contrast";

        this.imgCompare.src = "../img/compare.png";
        this.previewImg.src = "../img/placeholder.svg";
        this.closeImgBtn.src = "../img/close.svg";
        this.fileInput.setAttribute("accept", "image/*");

        this.wrapper.classList.add("wrapper", "disable");
        this.container.classList.add("container");
        this.editor.classList.add("editor");
        this.compare.classList.add("compare");
        this.rotate.classList.add("rotate");
        this.titleRotate.classList.add("title");
        this.options.classList.add("options");
        this.iLeft.classList.add("fa-solid", "fa-rotate-left");
        this.iRight.classList.add("fa-solid", "fa-rotate-right");
        this.iHorizon.classList.add("bx", "bx-reflect-vertical");
        this.iVert.classList.add("bx", "bx-reflect-horizontal");
        this.sizes.classList.add("dimensions");
        this.rowSizes.classList.add("sizes");
        this.columnWidth.classList.add("width");
        this.columnHeight.classList.add("height");
        this.filter.classList.add("filter");
        this.filterOptions.classList.add("options");
        this.btnBright.classList.add("active");
        this.filterInfo.classList.add("filter-info");
        this.filterName.classList.add("name");
        this.filterValue.classList.add("value");
        this.filterExtent.classList.add("extent");
        this.previewImgDiv.classList.add("preview-img");
        this.controls.classList.add("controls");
        this.resetFilterBtn.classList.add("reset-filter");
        this.controlsRow.classList.add("row");
        this.fileInput.classList.add("file-input");
        this.saveImgBtn.classList.add("save-img");
        this.chooseImgBtn.classList.add("choose-img");
        this.filterTitle.classList.add("title");
        this.modal.classList.add("modal-wrapper-save");
        this.modalTextWrap.classList.add("wrapper-text");
        this.closeImgWrapper.classList.add("closeImgWrap");
        this.closeImgBtn.classList.add("closeImg");
        this.closeModal.classList.add("close-modal");
        this.closeModalText.classList.add("close-modal-text");
        this.closeModalBtn.classList.add("close-modal-btn");
        this.closeModalYes.classList.add("close-modal-yes");
        this.closeModalNo.classList.add("close-modal-no");
    },
    appendElements() {
        root.append(this.wrapper);
        this.wrapper.append(this.title, this.container, this.controls, this.modal, this.closeModal);
        this.container.prepend(this.editor, this.previewImgDiv, this.compare, this.closeImgWrapper);
        this.editor.append(this.rotate, this.sizes, this.filter);
        this.compare.append(this.imgCompare);
        this.rotate.append(this.titleRotate, this.options);
        this.options.append(this.btnLeft, this.btnRight, this.btnHorizon, this.btnVert);
        this.btnLeft.append(this.iLeft);
        this.btnRight.append(this.iRight);
        this.btnHorizon.append(this.iHorizon);
        this.btnVert.append(this.iVert);
        this.sizes.append(this.rowSizes);
        this.rowSizes.append(this.columnWidth, this.columnHeight);
        this.columnWidth.append(this.widthLabel, this.widthInput);
        this.columnHeight.append(this.heightLabel, this.heightInput);
        this.filter.append(this.filterTitle, this.filterOptions, this.filterExtent);
        this.filterOptions.append(this.btnBright, this.btnSatur, this.btnInvers, this.btnGray, this.btnBlur, this.btnContr);
        this.filterExtent.append(this.filterInfo, this.filterVal);
        this.filterInfo.append(this.filterName, this.filterValue);
        this.previewImgDiv.append(this.previewImg);
        this.controls.append(this.resetFilterBtn, this.controlsRow);
        this.controlsRow.append(this.fileInput, this.chooseImgBtn, this.saveImgBtn);
        this.modal.append(this.modalTextWrap);
        this.modalTextWrap.append(this.modalText);
        this.closeImgWrapper.append(this.closeImgBtn);
        this.closeModalBtn.append(this.closeModalYes, this.closeModalNo)
        this.closeModal.append(this.closeModalText, this.closeModalBtn);
    },

    run() {
        this.elementOptions();
        this.appendElements();
    }
};
ui.run();

const { wrapper, fileInput, filterOptions, filterName, filterValue, filterVal, rotateOptions, previewImg, chooseImgBtn, resetFilterBtn, saveImgBtn, compare, modal, widthInput, heightInput, closeImgBtn, closeModal, closeModalYes, closeModalNo } = ui;

// logic
const filters = {
    brightness: 100,
    saturation: 100,
    inversion: 0,
    grayscale: 0,
    blurr: 0,
    contrast: 100,
};

const positions = {
    rotate: 0,
    flipHorizon: 1,
    flipVert: 1
};

function applyFilters(rotate, flipHorizontal, flipVertical, brightness, saturation, inversion, grayscale, blurr, contrast) {
    previewImg.style.transform = `
        rotate(${rotate}deg) 
        scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `
        brightness(${brightness}%) 
        saturate(${saturation}%) 
        invert(${inversion}%) 
        grayscale(${grayscale}%) 
        blur(${blurr}px) 
        contrast(${contrast}%)`;
}

fileInput.addEventListener("change", () => {
    let file = fileInput.files[0];
    if (!file) {
        return;
    }
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        resetFilterBtn.click();
        document.querySelector(".wrapper").classList.remove("disable");
    });
});

chooseImgBtn.addEventListener("click", () => fileInput.click());

previewImg.addEventListener("click", () => {
    let file = fileInput.files[0];
    if (!file) {
        fileInput.click();
    } else {
        let win = window.open("");
        win.document.write(`
        <html>
            <head>
                <title>Preview Edited Image</title>
            </head>
            <body>
                <img src="${previewImg.src}"; style="margin: auto; display: block; width: 800px; height: 573px; transform: rotate(${positions.rotate}deg) scale(${positions.flipHorizon}, ${positions.flipVert}); filter: brightness(${filters.brightness}%) saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%) blur(${filters.blurr}px) contrast(${filters.contrast}%);">
            </body>
        </html>`);
    }
});

document.querySelectorAll(".filter button").forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.textContent = option.textContent;
        switch (option.id) {
            case "brightness": {
                filterVal.max = "200"; filterVal.value = filters.brightness; filterValue.textContent = `${filters.brightness}%`;
            } break;
            case "saturation": {
                filterVal.max = "200"; filterVal.value = filters.saturation; filterValue.textContent = `${filters.saturation}%`;
            } break;
            case "inversion": {
                filterVal.max = "100"; filterVal.value = filters.inversion; filterValue.textContent = `${filters.inversion}%`;
            } break;
            case "grayscale": {
                filterVal.max = "100"; filterVal.value = filters.grayscale; filterValue.textContent = `${filters.grayscale}%`;
            } break;
            case "blur": {
                filterVal.max = "10"; filterVal.value = filters.blurr; filterValue.textContent = `${filters.blurr}px`;
            } break;
            case "contrast": {
                filterVal.max = "200"; filterVal.value = filters.contrast; filterValue.textContent = `${filters.contrast}%`;
            }
        }
    });
});

filterVal.addEventListener("input", () => {
    filterValue.textContent = `${filterVal.value}%`;
    const selectedFilter = document.querySelector(".options .active");
    switch (selectedFilter.id) {
        case "brightness": filters.brightness = filterVal.value; break;
        case "saturation": filters.saturation = filterVal.value; break;
        case "inversion": filters.inversion = filterVal.value; break;
        case "grayscale": filters.grayscale = filterVal.value; break;
        case "blur": filters.blurr = filterVal.value; break;
        case "contrast": filters.contrast = filterVal.value; break;
    }
    applyFilters(positions.rotate, positions.flipHorizon, positions.flipVert, filters.brightness, filters.saturation, filters.inversion, filters.grayscale, filters.blurr, filters.contrast);
});

document.querySelectorAll(".rotate button").forEach(option => {
    option.addEventListener("click", () => {
        switch (option.id) {
            case "left": positions.rotate -= 90; break;
            case "right": positions.rotate += 90; break;
            case "horizontal": positions.flipHorizon = positions.flipHorizon === 1 ? -1 : 1; break;
            case "vertical": positions.flipVert = positions.flipVert === 1 ? -1 : 1; break;
        }

        if (positions.rotate === 90 || positions.rotate === 270 || positions.rotate === -90 || positions.rotate === -270) {
            previewImg.style.minHeight = "500px";
        } else if (positions.rotate === 180 || positions.rotate === 360 || positions.rotate === -180 || positions.rotate === -360){
            previewImg.style.minHeight = "300px";
            if (positions.rotate === 360 || positions.rotate === -360) {
                positions.rotate = 0;
            }
        }
        
        applyFilters(positions.rotate, positions.flipHorizon, positions.flipVert, filters.brightness, filters.saturation, filters.inversion, filters.grayscale, filters.blurr, filters.contrast);
    });
});

resetFilterBtn.addEventListener("click", () => {
    filters.brightness = 100; filters.saturation = 100; filters.inversion = 0; filters.grayscale = 0; filters.blurr = 0; filters.contrast = 100;
    positions.rotate = 0; positions.flipHorizon = 1; positions.flipVert = 1;
    document.querySelectorAll(".filter button")[0].click();
    applyFilters(positions.rotate, positions.flipHorizon, positions.flipVert, filters.brightness, filters.saturation, filters.inversion, filters.grayscale, filters.blurr, filters.contrast);
});

saveImgBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const ct = canvas.getContext("2d");
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ct.filter = `brightness(${filters.brightness}%) saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%) blur(${filters.blurr}px) contrast(${filters.contrast}%)`;
    ct.translate(canvas.width / 2, canvas.height / 2);
    if (positions.rotate !== 0) {
        ct.rotate(positions.rotate * Math.PI / 180);
    }
    ct.scale(positions.flipHorizon, positions.flipVert);
    ct.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
});

closeImgBtn.addEventListener("click", () => {
    closeModal.classList.add("close-modal-active");

    closeModalYes.addEventListener("click", () => {
        location.reload();
    });

    closeModalNo.addEventListener("click", () => {
        closeModal.classList.remove("close-modal-active");
    });
});

compare.addEventListener("mousedown", () => {
    applyFilters(0, 1, 1, 100, 100, 0, 0, 0, 100);
});

compare.addEventListener("mouseup", () => {
    applyFilters(positions.rotate, positions.flipHorizon, positions.flipVert, filters.brightness, filters.saturation, filters.inversion, filters.grayscale, filters.blurr, filters.contrast);
});

saveImgBtn.addEventListener("click", () => {
    modal.classList.add("modal-wrapper-active");

    if (modal.classList.contains("modal-wrapper-active")) {
        setTimeout(() => {
            modal.classList.remove("modal-wrapper-active");
        }, 1500);
    }
});