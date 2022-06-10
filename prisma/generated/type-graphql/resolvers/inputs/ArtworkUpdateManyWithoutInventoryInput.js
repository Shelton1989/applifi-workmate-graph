"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateManyWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateManyInventoryInputEnvelope_1 = require("../inputs/ArtworkCreateManyInventoryInputEnvelope");
const ArtworkCreateOrConnectWithoutInventoryInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutInventoryInput");
const ArtworkCreateWithoutInventoryInput_1 = require("../inputs/ArtworkCreateWithoutInventoryInput");
const ArtworkScalarWhereInput_1 = require("../inputs/ArtworkScalarWhereInput");
const ArtworkUpdateManyWithWhereWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateManyWithWhereWithoutInventoryInput");
const ArtworkUpdateWithWhereUniqueWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateWithWhereUniqueWithoutInventoryInput");
const ArtworkUpsertWithWhereUniqueWithoutInventoryInput_1 = require("../inputs/ArtworkUpsertWithWhereUniqueWithoutInventoryInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpdateManyWithoutInventoryInput = class ArtworkUpdateManyWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateOrConnectWithoutInventoryInput_1.ArtworkCreateOrConnectWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpsertWithWhereUniqueWithoutInventoryInput_1.ArtworkUpsertWithWhereUniqueWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateManyInventoryInputEnvelope_1.ArtworkCreateManyInventoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateManyInventoryInputEnvelope_1.ArtworkCreateManyInventoryInputEnvelope)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpdateWithWhereUniqueWithoutInventoryInput_1.ArtworkUpdateWithWhereUniqueWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpdateManyWithWhereWithoutInventoryInput_1.ArtworkUpdateManyWithWhereWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkScalarWhereInput_1.ArtworkScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutInventoryInput.prototype, "deleteMany", void 0);
ArtworkUpdateManyWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateManyWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkUpdateManyWithoutInventoryInput);
exports.ArtworkUpdateManyWithoutInventoryInput = ArtworkUpdateManyWithoutInventoryInput;
