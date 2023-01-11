"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutLocationsInput_1 = require("../inputs/TenantCreateOrConnectWithoutLocationsInput");
const TenantCreateWithoutLocationsInput_1 = require("../inputs/TenantCreateWithoutLocationsInput");
const TenantUpdateWithoutLocationsInput_1 = require("../inputs/TenantUpdateWithoutLocationsInput");
const TenantUpsertWithoutLocationsInput_1 = require("../inputs/TenantUpsertWithoutLocationsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneWithoutLocationsInput = class TenantUpdateOneWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput)
], TenantUpdateOneWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutLocationsInput_1.TenantCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutLocationsInput_1.TenantCreateOrConnectWithoutLocationsInput)
], TenantUpdateOneWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutLocationsInput_1.TenantUpsertWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutLocationsInput_1.TenantUpsertWithoutLocationsInput)
], TenantUpdateOneWithoutLocationsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TenantUpdateOneWithoutLocationsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TenantUpdateOneWithoutLocationsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneWithoutLocationsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutLocationsInput_1.TenantUpdateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutLocationsInput_1.TenantUpdateWithoutLocationsInput)
], TenantUpdateOneWithoutLocationsInput.prototype, "update", void 0);
TenantUpdateOneWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneWithoutLocationsInput", {
        isAbstract: true
    })
], TenantUpdateOneWithoutLocationsInput);
exports.TenantUpdateOneWithoutLocationsInput = TenantUpdateOneWithoutLocationsInput;
