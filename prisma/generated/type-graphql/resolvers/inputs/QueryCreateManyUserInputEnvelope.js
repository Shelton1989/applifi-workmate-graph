"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyUserInput_1 = require("../inputs/QueryCreateManyUserInput");
let QueryCreateManyUserInputEnvelope = class QueryCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateManyUserInput_1.QueryCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateManyUserInputEnvelope.prototype, "data", void 0);
QueryCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], QueryCreateManyUserInputEnvelope);
exports.QueryCreateManyUserInputEnvelope = QueryCreateManyUserInputEnvelope;
