"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutProductsInput_1 = require("../inputs/ArtworkCreateWithoutProductsInput");
const ArtworkUpdateWithoutProductsInput_1 = require("../inputs/ArtworkUpdateWithoutProductsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpsertWithWhereUniqueWithoutProductsInput = class ArtworkUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutProductsInput_1.ArtworkUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutProductsInput_1.ArtworkUpdateWithoutProductsInput)
], ArtworkUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput)
], ArtworkUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
ArtworkUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkUpsertWithWhereUniqueWithoutProductsInput);
exports.ArtworkUpsertWithWhereUniqueWithoutProductsInput = ArtworkUpsertWithWhereUniqueWithoutProductsInput;
