"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutExperiencesInput_1 = require("../inputs/TenantCreateWithoutExperiencesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutExperiencesInput = class TenantCreateOrConnectWithoutExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutExperiencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput)
], TenantCreateOrConnectWithoutExperiencesInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutExperiencesInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutExperiencesInput);
exports.TenantCreateOrConnectWithoutExperiencesInput = TenantCreateOrConnectWithoutExperiencesInput;
