"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryUpdateWithoutUserInput_1 = require("../inputs/QueryUpdateWithoutUserInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpdateWithWhereUniqueWithoutUserInput = class QueryUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateWithoutUserInput_1.QueryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateWithoutUserInput_1.QueryUpdateWithoutUserInput)
], QueryUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
QueryUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], QueryUpdateWithWhereUniqueWithoutUserInput);
exports.QueryUpdateWithWhereUniqueWithoutUserInput = QueryUpdateWithWhereUniqueWithoutUserInput;
