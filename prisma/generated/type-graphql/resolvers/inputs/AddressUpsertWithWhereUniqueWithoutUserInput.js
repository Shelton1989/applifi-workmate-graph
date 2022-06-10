"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressUpdateWithoutUserInput_1 = require("../inputs/AddressUpdateWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpsertWithWhereUniqueWithoutUserInput = class AddressUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
AddressUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], AddressUpsertWithWhereUniqueWithoutUserInput);
exports.AddressUpsertWithWhereUniqueWithoutUserInput = AddressUpsertWithWhereUniqueWithoutUserInput;
