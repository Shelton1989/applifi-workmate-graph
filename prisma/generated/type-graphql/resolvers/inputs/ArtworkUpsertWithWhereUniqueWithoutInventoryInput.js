"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpsertWithWhereUniqueWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutInventoryInput_1 = require("../inputs/ArtworkCreateWithoutInventoryInput");
const ArtworkUpdateWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateWithoutInventoryInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpsertWithWhereUniqueWithoutInventoryInput = class ArtworkUpsertWithWhereUniqueWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkUpsertWithWhereUniqueWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutInventoryInput_1.ArtworkUpdateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutInventoryInput_1.ArtworkUpdateWithoutInventoryInput)
], ArtworkUpsertWithWhereUniqueWithoutInventoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput)
], ArtworkUpsertWithWhereUniqueWithoutInventoryInput.prototype, "create", void 0);
ArtworkUpsertWithWhereUniqueWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpsertWithWhereUniqueWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkUpsertWithWhereUniqueWithoutInventoryInput);
exports.ArtworkUpsertWithWhereUniqueWithoutInventoryInput = ArtworkUpsertWithWhereUniqueWithoutInventoryInput;
