"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutOrdersInput_1 = require("../inputs/AddressCreateOrConnectWithoutOrdersInput");
const AddressCreateWithoutOrdersInput_1 = require("../inputs/AddressCreateWithoutOrdersInput");
const AddressUpdateWithoutOrdersInput_1 = require("../inputs/AddressUpdateWithoutOrdersInput");
const AddressUpsertWithoutOrdersInput_1 = require("../inputs/AddressUpsertWithoutOrdersInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneWithoutOrdersInput = class AddressUpdateOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput)
], AddressUpdateOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutOrdersInput_1.AddressCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutOrdersInput_1.AddressCreateOrConnectWithoutOrdersInput)
], AddressUpdateOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpsertWithoutOrdersInput_1.AddressUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpsertWithoutOrdersInput_1.AddressUpsertWithoutOrdersInput)
], AddressUpdateOneWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressUpdateOneWithoutOrdersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressUpdateOneWithoutOrdersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutOrdersInput_1.AddressUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutOrdersInput_1.AddressUpdateWithoutOrdersInput)
], AddressUpdateOneWithoutOrdersInput.prototype, "update", void 0);
AddressUpdateOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateOneWithoutOrdersInput", {
        isAbstract: true
    })
], AddressUpdateOneWithoutOrdersInput);
exports.AddressUpdateOneWithoutOrdersInput = AddressUpdateOneWithoutOrdersInput;
