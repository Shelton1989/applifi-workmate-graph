"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateManyUserInputEnvelope_1 = require("../inputs/AddressCreateManyUserInputEnvelope");
const AddressCreateOrConnectWithoutUserInput_1 = require("../inputs/AddressCreateOrConnectWithoutUserInput");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressScalarWhereInput_1 = require("../inputs/AddressScalarWhereInput");
const AddressUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AddressUpdateManyWithWhereWithoutUserInput");
const AddressUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AddressUpdateWithWhereUniqueWithoutUserInput");
const AddressUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AddressUpsertWithWhereUniqueWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateManyWithoutUserInput = class AddressUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutUserInput_1.AddressUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateManyUserInputEnvelope_1.AddressCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateManyUserInputEnvelope_1.AddressCreateManyUserInputEnvelope)
], AddressUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutUserInput_1.AddressUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereWithoutUserInput_1.AddressUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressScalarWhereInput_1.AddressScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
AddressUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], AddressUpdateManyWithoutUserInput);
exports.AddressUpdateManyWithoutUserInput = AddressUpdateManyWithoutUserInput;
