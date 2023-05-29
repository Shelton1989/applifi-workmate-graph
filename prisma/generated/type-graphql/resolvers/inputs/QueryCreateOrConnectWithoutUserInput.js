"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateWithoutUserInput_1 = require("../inputs/QueryCreateWithoutUserInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryCreateOrConnectWithoutUserInput = class QueryCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput)
], QueryCreateOrConnectWithoutUserInput.prototype, "create", void 0);
QueryCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], QueryCreateOrConnectWithoutUserInput);
exports.QueryCreateOrConnectWithoutUserInput = QueryCreateOrConnectWithoutUserInput;
