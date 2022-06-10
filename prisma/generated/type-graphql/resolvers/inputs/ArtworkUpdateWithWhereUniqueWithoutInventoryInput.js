"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateWithWhereUniqueWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateWithoutInventoryInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpdateWithWhereUniqueWithoutInventoryInput = class ArtworkUpdateWithWhereUniqueWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkUpdateWithWhereUniqueWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutInventoryInput_1.ArtworkUpdateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutInventoryInput_1.ArtworkUpdateWithoutInventoryInput)
], ArtworkUpdateWithWhereUniqueWithoutInventoryInput.prototype, "data", void 0);
ArtworkUpdateWithWhereUniqueWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateWithWhereUniqueWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkUpdateWithWhereUniqueWithoutInventoryInput);
exports.ArtworkUpdateWithWhereUniqueWithoutInventoryInput = ArtworkUpdateWithWhereUniqueWithoutInventoryInput;
