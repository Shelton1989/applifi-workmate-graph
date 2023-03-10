"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateacceptedUserEmailDomainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantCreateacceptedUserEmailDomainsInput = class TenantCreateacceptedUserEmailDomainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TenantCreateacceptedUserEmailDomainsInput.prototype, "set", void 0);
TenantCreateacceptedUserEmailDomainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateacceptedUserEmailDomainsInput", {
        isAbstract: true
    })
], TenantCreateacceptedUserEmailDomainsInput);
exports.TenantCreateacceptedUserEmailDomainsInput = TenantCreateacceptedUserEmailDomainsInput;
