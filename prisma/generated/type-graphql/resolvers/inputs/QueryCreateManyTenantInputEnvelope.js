"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyTenantInput_1 = require("../inputs/QueryCreateManyTenantInput");
let QueryCreateManyTenantInputEnvelope = class QueryCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateManyTenantInput_1.QueryCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateManyTenantInputEnvelope.prototype, "data", void 0);
QueryCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], QueryCreateManyTenantInputEnvelope);
exports.QueryCreateManyTenantInputEnvelope = QueryCreateManyTenantInputEnvelope;
