"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyInput_1 = require("../../../inputs/QueryCreateManyInput");
let CreateManyQueryArgs = class CreateManyQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateManyInput_1.QueryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyQueryArgs.prototype, "data", void 0);
CreateManyQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyQueryArgs);
exports.CreateManyQueryArgs = CreateManyQueryArgs;
