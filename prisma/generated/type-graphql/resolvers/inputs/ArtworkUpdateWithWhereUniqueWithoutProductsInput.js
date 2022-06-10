"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateWithoutProductsInput_1 = require("../inputs/ArtworkUpdateWithoutProductsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpdateWithWhereUniqueWithoutProductsInput = class ArtworkUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutProductsInput_1.ArtworkUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutProductsInput_1.ArtworkUpdateWithoutProductsInput)
], ArtworkUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
ArtworkUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkUpdateWithWhereUniqueWithoutProductsInput);
exports.ArtworkUpdateWithWhereUniqueWithoutProductsInput = ArtworkUpdateWithWhereUniqueWithoutProductsInput;
